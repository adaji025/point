import {
  CartItemType,
  CartStateType,
  REDUCER_ACTION_TYPE,
  ReducerAction,
} from "@/types/CartContextTypes";
import { ReactElement, createContext, useMemo, useReducer } from "react";

const initCartState: CartStateType = { cart: [] };

console.log("CartState ==>", initCartState);

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      
      if (!action.payload) {
        throw new Error("action.payload is missing in ADD action");
      }

      const { _id, name, price, rate } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { _id, name, price, qty, rate }],
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload is missing in REMOVE action");
      }

      const { _id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      return { ...state, cart: [...filteredCart] };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload is missing in QUANTITY action");
      }

      const { _id, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedItem: CartItemType = { ...itemExists, qty };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Unidentified reducer type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce((prevValues, cartItem) => {
    return prevValues + cartItem.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((prevValues, cartItem) => {
      return prevValues + (cartItem.qty + cartItem.price);
    }, 0)
  );

  const cart = state.cart;

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 10,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
