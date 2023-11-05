import { useContext } from "react";
import { CartContext, CartProviderValue } from "../context/CartContext";

export function useCartContext() {
  const cartContext = useContext(CartContext) as CartProviderValue;
  return cartContext;
}
