const BASE_URL = "http://localhost:3000/api/auth";

export async function fetchLogin(email: string, password: string) {
  let data;

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    data = await res.json();
  } catch (e) {
    const err = e as Error;
    data = { error: err.message };
  }
  localStorage.setItem("token", data.token);

  return data;
}

export async function fetchSignup(
  fullName: string,
  email: string,
  password: string
) {
  let data;

  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });
    data = await res.json();
  } catch (e) {
    const err = e as Error;
    data = { error: err.message };
  }
  return data;
}
