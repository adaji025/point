export type CartItemType = {
  _id: string;
  name: string;
  price: number;
  qty: number;
  rate: number;
};

export type CartStateType = { cart: CartItemType[] };

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

export const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
