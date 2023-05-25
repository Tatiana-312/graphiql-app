import { FC } from 'react';
import styles from './Loading.module.scss';
import { useTranslation } from 'react-i18next';

const Loading: FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className={styles.loading_wrapper}>
        <div className={styles.spin_figure}></div>
        <h2 className={styles.loading_text}>{t('loading')}</h2>
      </div>
    </main>
  );
};

export default Loading;
