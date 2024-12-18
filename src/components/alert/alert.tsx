
import styles from "./alert.module.css";

export const Alert = () => {
  return (
    <section className={styles.alertContainer}>
      <p>Email copied!</p>
      <span>The email address has been copied to your clipboard. </span>
    </section>
  );
};
