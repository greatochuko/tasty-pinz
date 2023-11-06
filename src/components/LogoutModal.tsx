import styles from "./LogoutModal.module.css";

type LogoutModalProps = {
  closeModal: () => void;
};

export default function LogoutModal({ closeModal }: LogoutModalProps) {
  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      <div className={styles.logoutModal} onClick={(e) => e.stopPropagation()}>
        <h3>Logout?</h3>
        <p>Are you sure you want to logout?</p>
        <div className={styles.btnGroup}>
          <button onClick={closeModal}>Cancel</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
