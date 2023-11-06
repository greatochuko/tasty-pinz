import { createContext, useReducer } from "react";
import { ProductType } from "../components/Product";

export type CartItemType = { product: ProductType; quantity: number };

export type CartProviderValue = {
  state: CartItemType[];
  addProductToCart: (product: CartItemType) => void;
  removeProductFromCart: (product: ProductType) => void;
  increaseProductQuantity: (product: ProductType) => void;
  decreaseProductQuantity: (product: ProductType) => void;
  clearCart: (product: ProductType) => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

type CartProviderType = {
  children: React.ReactNode;
};

const initialState: CartItemType[] = [];

type ReducerAction = {
  type: "ADD" | "REMOVE" | "CLEAR" | "DECREASE_QUANTITY" | "INCREASE_QUANTITY";
  payload?: CartItemType | ProductType;
};

function cartReducer(
  state: CartItemType[],
  action: ReducerAction
): CartItemType[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload as CartItemType];

    case "REMOVE":
      return state.filter((cartItem) => cartItem.product !== action.payload);

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

  function addProductToCart(product: CartItemType) {
    dispatch({ type: "ADD", payload: product });
  }

  function removeProductFromCart(product: ProductType) {
    dispatch({ type: "REMOVE", payload: product });
  }

  function increaseProductQuantity(product: ProductType) {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  }

  function decreaseProductQuantity(product: ProductType) {
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
