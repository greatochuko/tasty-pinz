import { createContext, useReducer } from "react";
import { Product } from "../components/Product";

type CartItem = { product: Product; quantity: number };

export type CartProviderValue = {
  state: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (product: CartItem) => void;
  clearCart: (product: Product) => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

type CartProviderType = {
  children: React.ReactNode;
};

const initialState: CartItem[] = [];

type ReducerAction = {
  type: "ADD" | "REMOVE" | "CLEAR";
  payload?: object;
};

function cartReducer(state: CartItem[], action: ReducerAction): CartItem[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload as CartItem];
    case "REMOVE":
      return state.filter((product) => product !== action.payload);
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}

export default function CartProvider({ children }: CartProviderType) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addProductToCart(product: CartItem) {
    dispatch({ type: "ADD", payload: product });
  }

  function removeProductFromCart(product: CartItem) {
    dispatch({ type: "REMOVE", payload: product });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  return (
    <CartContext.Provider
      value={{ state, addProductToCart, removeProductFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
