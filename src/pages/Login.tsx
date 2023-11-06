import { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassswword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    navigate("/");
  }

  return (
    <main className={styles.login}>
      <img src="/logo-white.png" alt="logo" className={styles.logo} />

      <form onSubmit={login}>
        <div className={styles.heading}>
          <h1>Log In</h1>
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
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
            <button type="button" onClick={() => setShowPassswword(false)}>
              <i className="fa-solid fa-eye-slash"></i>
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassswword(true)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          )}
        </div>
        <button type="submit">Log In</button>
      </form>
    </main>
  );
}
