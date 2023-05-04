import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

export function Header(props: { isAuthorized: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clickHandler = () => {
    const toggledLanguage = language === 'ENG' ? 'RUS' : 'ENG';
    setLanguage(toggledLanguage);
    i18n.changeLanguage(toggledLanguage);
  };

  return (
    <header className={scrolled ? styles.header + ' ' + styles.scrolled : styles.header}>
      <div className={'wrapper ' + styles.headerWraper}>
        <div className={styles.graphqlHeader}>
          <div className={styles.logo}></div>
          <h1>GraphQL</h1>
        </div>
        <div className={styles.userBtns}>
          <div className={styles.language} onClick={clickHandler}>
            {language}
          </div>
          {props.isAuthorized ? (
            <button className="btn sign-out-btn">{t('sign-out')}</button>
          ) : (
            <>
              <button className="btn sign-in-btn">{t('sign-in')}</button>
              <button className="btn sign-up-btn">{t('sign-up')}</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
