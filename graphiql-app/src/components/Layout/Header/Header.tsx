import { FC } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { useAuth } from '../../../hooks/use-auth';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from '../../../redux/store/userSlice';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const [burger, setBurger] = useState(false);
  const { t, i18n } = useTranslation();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const auth = getAuth();

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

  const clickLangHandler = () => {
    const toggledLanguage = language === 'ENG' ? 'RUS' : 'ENG';
    setLanguage(toggledLanguage);
    i18n.changeLanguage(toggledLanguage);
  };

  const clickBurgerHandler = () => {
    setBurger((prevState) => !prevState);
  };

  return (
    <header className={scrolled ? styles.header + ' ' + styles.scrolled : styles.header}>
      {burger ? <BurgerMenu onClick={clickBurgerHandler} /> : null}
      <div className="wrapper">
        <div className={styles.header_wrapper}>
          <div className={styles.graphql_header}>
            <div className={styles.logo}></div>
            <h1 className={styles.title}>GraphiQL</h1>
          </div>
          <div className={styles.user_btns}>
            <div className={styles.language} onClick={clickLangHandler}>
              {language}
            </div>
            {isAuth ? (
              <button
                className={'btn ' + styles.sign_out_btn}
                onClick={() => {
                  signOut(auth);
                  dispatch(removeUser());
                }}
              >
                {t('sign-out')}
              </button>
            ) : (
              <>
                <div className={styles.burger} onClick={clickBurgerHandler}></div>
                <Link to="/sign-in" className={'btn ' + styles.sign_btn}>
                  {t('sign-in')}
                </Link>
                <Link to="/sign-up" className={'btn ' + styles.sign_btn}>
                  {t('sign-up')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
