import { FormEvent, useState } from "react";
import styles from "./Auth.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { fetchLogin, fetchSignup } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";
import { fetchUser } from "../services/userServices";
import { useCartContext } from "../hooks/useCartContext";
import { UserType } from "../context/UserContext";

export default function Auth({ type }: { type: "login" | "signup" }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const { setCart } = useCartContext();

  const submitBtnText = loading
    ? "Loading"
    : type === "login"
    ? "Log In"
    : "Sign Up";

  const canLogin = password && email;
  const canSignup =
    email && fullName && password && password !== confirmPassword;

  async function login(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = await fetchLogin(email, password);

    if (!data.error) {
      const user: UserType = await fetchUser();
      setUser(user);
      setCart(user.cart);
      navigate("/");
    }
    setError(data.error);
    setLoading(false);
  }

  async function signup(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    const data = await fetchSignup(fullName, email, password);
    if (!data.error) {
      setUser(await fetchUser());
      navigate("/");
    }
    setError(data.error);
    setLoading(false);
  }

  if (user) return <Navigate to={"/"} />;

  return (
    <main className={styles.auth}>
      <Link to={"/"}>
        <img src="/logo-white.png" alt="logo" className={styles.logo} />
      </Link>

      <form onSubmit={type === "login" ? login : signup}>
        <div className={styles.heading}>
          <h1>{type === "login" ? "Log In" : "Sign Up"}</h1>
          {type === "login" ? (
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          )}
        </div>
        {type === "signup" ? (
          <div
            className={`${styles.inputGroup} ${fullName ? styles.filled : ""}`}
          >
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        ) : null}
        <div className={`${styles.inputGroup} ${email ? styles.filled : ""}`}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`${styles.inputGroup} ${password ? styles.filled : ""}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <button type="button" onClick={() => setShowPassword(false)}>
              <i className="fa-solid fa-eye-slash"></i>
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(true)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          )}
        </div>
        {type === "signup" ? (
          <div
            className={`${styles.inputGroup} ${
              confirmPassword ? styles.filled : ""
            }`}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showConfirmPassword ? (
              <button
                type="button"
                onClick={() => setShowConfirmPassword(false)}
              >
                <i className="fa-solid fa-eye-slash"></i>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirmPassword(true)}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            )}
          </div>
        ) : null}
        <p className={styles.error}>{error}</p>
        <button
          disabled={loading || (type === "login" ? !canLogin : !canSignup)}
          type="submit"
        >
          {submitBtnText}
        </button>
      </form>
    </main>
  );
}
