import { useAlert } from 'src/hooks';
import styles from './alert.module.css';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

export const Alert = () => {
  const pageWrapper = document.getElementById('pageWrapper') as Element;

  const { showAlert } = useAlert();
  const { t } = useTranslation();

  return (
    showAlert &&
    createPortal(
      <section className={styles.alertContainer}>
        <p>{t('EMAIL_COPIED')}</p>
        <span>{t('EMAIL_COPIED_SUPTITLE')}</span>
      </section>,
      pageWrapper,
    )
  );
};
