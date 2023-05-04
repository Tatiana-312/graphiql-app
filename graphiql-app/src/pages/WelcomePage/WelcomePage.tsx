import React from 'react';
import { Header } from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './WelcomePage.module.scss';

export function WelcomePage() {
  const { t } = useTranslation();
  const isAuthorized = true;

  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main className="main">
        <div className={styles.welcome}>
          <h2 className={styles.greeting}>{t('welcome')}</h2>
          {isAuthorized && <button className={'btn ' + styles.getStartedBtn}>{t('start')}</button>}
        </div>
        <div className={styles.aboutUs}>
          <h3>{t('descrition-header')}</h3>
          <p className={styles.description}>{t('description')}</p>
        </div>
      </main>
    </>
  );
}
