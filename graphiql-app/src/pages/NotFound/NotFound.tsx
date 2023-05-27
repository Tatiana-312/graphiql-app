import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <h2>{t('not-found')}</h2>
    </main>
  );
};

export default NotFound;
