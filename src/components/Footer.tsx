import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy;{new Date().getFullYear()} Great Ogheneochuko</p>
      <img className={styles.logo} src="logo.png" alt="" />
      <div className={styles.socialLinks}>
        <a
          href="http://linkedin.com/in/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="http://github.com/greatochuko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="http://twitter.com/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </footer>
  );
}
