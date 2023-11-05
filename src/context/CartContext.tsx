import { createContext, useReducer } from "react";
import { Product } from "../components/Product";

type CartItem = { product: Product; quantity: number };

export type CartProviderValue = {
  state: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (product: Product) => void;
  increaseProductQuantity: (product: Product) => void;
  decreaseProductQuantity: (product: Product) => void;
  clearCart: (product: Product) => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

type CartProviderType = {
  children: React.ReactNode;
};

const initialState: CartItem[] = [];

type ReducerAction = {
  type: "ADD" | "REMOVE" | "CLEAR" | "DECREASE_QUANTITY" | "INCREASE_QUANTITY";
  payload?: CartItem | Product;
};

function cartReducer(state: CartItem[], action: ReducerAction): CartItem[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload as CartItem];

    case "REMOVE":
      return state.filter((product) => product !== action.payload);

    case "INCREASE_QUANTITY":
      return state.map((cartItem) => ({
        ...cartItem,
        quantity:
          cartItem.product === action.payload
            ? (cartItem.quantity += 1)
            : cartItem.quantity,
      }));

    case "DECREASE_QUANTITY": {
      const productToUpdate = state.find(
        (cartItem) => cartItem.product === action.payload
      );

      console.log(productToUpdate?.quantity);
      if ((productToUpdate?.quantity as number) <= 1) {
        return state.filter((cartItem) => cartItem.product !== action.payload);
      }

      return state.map((cartItem) => ({
        ...cartItem,
        quantity:
          cartItem.product === action.payload && cartItem.quantity > 1
            ? (cartItem.quantity -= 1)
            : cartItem.quantity,
      }));
    }

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

  function removeProductFromCart(product: Product) {
    dispatch({ type: "REMOVE", payload: product });
  }

  function increaseProductQuantity(product: Product) {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  }

  function decreaseProductQuantity(product: Product) {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
