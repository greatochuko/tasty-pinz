import { useState } from "react";
import styles from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Auth({ type }: { type: "login" | "signup" }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login() {
    navigate("/");
  }

  function signup() {
    navigate("/");
  }

  return (
    <main className={styles.auth}>
      <img src="/logo-white.png" alt="logo" className={styles.logo} />

      <form onSubmit={type === "login" ? login : signup}>
        <div className={styles.heading}>
          <h1>{type === "login" ? "Log In" : "Sign Up"}</h1>
          {type === "login" ? (
            <p>
              Don't have an account?
              <Link to={"/signup"}> Signup</Link>
            </p>
          ) : (
            <p>
              Already have an account?
              <Link to={"/login"}> Login</Link>
            </p>
          )}
        </div>
        {type === "signup" ? (
          <div
            className={`${styles.inputGroup} ${fullname ? styles.filled : ""}`}
          >
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
        {error ? <p className={styles.error}>{error}</p> : null}
        <button type="submit">{type === "login" ? "Log In" : "Sign Up"}</button>
      </form>
    </main>
  );
}
