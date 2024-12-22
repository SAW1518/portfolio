import { useAlert } from "src/hooks";
import styles from "./alert.module.css";
import { createPortal } from "react-dom";

export const Alert = () => {
  const pageWrapper = document.getElementById("pageWrapper") as Element;

  const { showAlert } = useAlert();
  return (
    showAlert &&
    createPortal(
      <section className={styles.alertContainer}>
        <p>Email copied!</p>
        <span>The email address has been copied to your clipboard. </span>
      </section>,
      pageWrapper,
    )
  );
};