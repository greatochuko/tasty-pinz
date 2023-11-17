import { BASE_URL } from "./authServices";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products/`);
    const data = await res.json();

    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}

export async function searchProducts(query: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/search?q=${query}`);
    const data = await res.json();

    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}
