import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ErrorBoundaryFallback.module.scss';

const ErrorBoundaryFallback: FC = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <h2>{t('error-fallback')}</h2>
    </main>
  );
};

export default ErrorBoundaryFallback;
