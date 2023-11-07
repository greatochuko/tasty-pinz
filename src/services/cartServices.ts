import { CartItemType } from "../context/CartContext";

const BASE_URL = "http://localhost:3000/api/cart";

export async function fetchAddMealToCart({
  product: { _id },
  quantity,
}: CartItemType) {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      body: JSON.stringify({ productId: _id, quantity }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}
