const BASE_URL = "http://localhost:3000/api/products";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/`);
    const data = await res.json();

    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}
