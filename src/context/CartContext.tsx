import { createContext, useReducer } from "react";
import { ProductType } from "../components/Product";
import { fetchUser } from "../services/userServices";
import {
  fetchAddMealToCart,
  fetchRemoveMealFromCart,
  fetchdecreaseCartItemQuantity,
  fetchincreaseCartItemQuantity,
} from "../services/cartServices";
import toast from "react-hot-toast";

export type CartItemType = { product: ProductType; quantity: number };

export type CartProviderValue = {
  cart: CartItemType[];
  addProductToCart: (product: CartItemType) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
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
  payload?: CartItemType | ProductType | CartItemType[] | string;
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
      return state.filter(
        (cartItem) => cartItem.product._id !== action.payload
      );

    case "INCREASE_QUANTITY":
      return state.map((cartItem) => ({
        ...cartItem,
        quantity:
          cartItem.product._id === action.payload
            ? (cartItem.quantity += 1)
            : cartItem.quantity,
      }));

    case "DECREASE_QUANTITY": {
      return state.map((cartItem) => ({
        ...cartItem,
        quantity:
          cartItem.product._id === action.payload
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
    const data = await fetchAddMealToCart(product);
    if (data.error) {
      toast.error("Something went wrong");
      return;
    }
    dispatch({ type: "ADD", payload: product });
  }

  async function removeProductFromCart(productId: string) {
    const data = await fetchRemoveMealFromCart(productId);
    if (data.error) {
      toast.error("Something went wrong");
      return;
    }
    dispatch({ type: "REMOVE", payload: productId });
  }

  async function increaseProductQuantity(productId: string) {
    const data = await fetchincreaseCartItemQuantity(productId);
    if (data.error) {
      toast.error("Something went wrong");
      return;
    }
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  }

  async function decreaseProductQuantity(productId: string) {
    const currQuantity = state.find(
      (cartItem) => cartItem.product._id === productId
    );
    if ((currQuantity?.quantity as number) <= 1) return;
    const data = await fetchdecreaseCartItemQuantity(productId);
    if (data.error) {
      toast.error("Something went wrong");
      return;
    }
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
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
