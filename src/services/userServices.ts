import { BASE_URL } from "./authServices";

export async function fetchUser() {
  const token = localStorage.getItem("token");
  if (!token) return { error: "no token" };
  try {
    const res = await fetch(`${BASE_URL}/user/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}
