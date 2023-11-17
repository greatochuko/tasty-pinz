import { createContext, useReducer } from "react";
import { ProductType } from "../components/Product";
import { fetchUser } from "../services/userServices";
import { fetchAddMealToCart } from "../services/cartServices";

export type CartItemType = { product: ProductType; quantity: number };

export type CartProviderValue = {
  cart: CartItemType[];
  addProductToCart: (product: CartItemType) => void;
  removeProductFromCart: (product: ProductType) => void;
  increaseProductQuantity: (product: ProductType) => void;
  decreaseProductQuantity: (product: ProductType) => void;
  setCart: (cart: CartItemType[]) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartProviderValue | null>(null);

type CartProviderType = {
  children: React.ReactNode;
};

type ReducerAction = {
  type:
    | "ADD"
    | "REMOVE"
    | "CLEAR"
    | "DECREASE_QUANTITY"
    | "INCREASE_QUANTITY"
    | "SET";
  payload?: CartItemType | ProductType | CartItemType[];
};

const user = await fetchUser();
const initialState: CartItemType[] = user.cart || [];

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

    case "SET":
      return action.payload as CartItemType[];

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export default function CartProvider({ children }: CartProviderType) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  async function addProductToCart(product: CartItemType) {
    await fetchAddMealToCart(product);
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

  function setCart(cart: CartItemType[]) {
    dispatch({ type: "SET", payload: cart });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
