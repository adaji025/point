export type CartItemType = {
  slug: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload is missing in ADD action");
      }

      const { slug, name, price } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.slug !== slug
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.slug === slug
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { slug, name, price, qty }],
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload is missing in REMOVE action");
      }

      const { slug } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.slug !== slug
      );

      return { ...state, cart: [...filteredCart] };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload is missing in QUANTITY action");
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Unidentified reducer type");
  }
};
