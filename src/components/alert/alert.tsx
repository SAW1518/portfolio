import { useAlert } from "src/hooks";
import styles from "./alert.module.css";

export const Alert = () => {
  const { showAlert } = useAlert();
  return (
    showAlert && (
      <section className={styles.alertContainer}>
        <p>Email copied!</p>
        <span>The email address has been copied to your clipboard. </span>
      </section>
    )
  );
};
