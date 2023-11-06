const BASE_URL = "http://localhost:3000/api/user";

export async function fetchUser() {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}
