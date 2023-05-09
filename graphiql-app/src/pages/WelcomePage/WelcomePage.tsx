import React from 'react';
import { Header } from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './WelcomePage.module.scss';

export function WelcomePage() {
  const { t } = useTranslation();
  const isAuthorized = false;

  function createList() {
    const arr = new Array(5).fill(0).map((el, i) => {
      const iconsClass = 'featureIcon' + i;
      return (
        <li className={styles.feature} key={i}>
          <span className={styles[iconsClass] + ' ' + styles.featureIcon}></span>
          {t('feature' + i)}
        </li>
      );
    });
    return arr;
  }

  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main className="main">
        <div className={styles.welcome}>
          <div className="wrapper">
            <h2 className={styles.greeting}>{t('welcome')}</h2>
            {isAuthorized && (
              <button className={'btn ' + styles.getStartedBtn}>{t('start')}</button>
            )}
          </div>
        </div>
        <div className="wrapper">
          <div className={styles.aboutApp}>
            <h3 className={styles.descriptionHeader}>{t('descrition-header')}</h3>
            <p className={styles.description}>{t('description')}</p>
            <ul>{createList()}</ul>
          </div>
        </div>
      </main>
    </>
  );
}
