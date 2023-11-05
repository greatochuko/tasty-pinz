import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export function useCartContext() {
  const {
    addProductToCart,
    clearCart,
    removeProductFromCart,
    state: cart,
  } = useContext(CartContext) as CartProviderValue;
  return { addProductToCart, clearCart, removeProductFromCart, cart };
}
