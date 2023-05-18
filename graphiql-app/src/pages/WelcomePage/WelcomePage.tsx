import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './WelcomePage.module.scss';
import Team from '../../components/Team/Team';
import { useAuth } from '../../hooks/use-auth';
import { Link } from 'react-router-dom';

const WelcomePage: FC = () => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  function createList() {
    const arr = new Array(5).fill(0).map((el, i) => {
      const iconsClass = 'feature_icon' + i;
      return (
        <li className={styles.feature} key={i}>
          <span className={styles[iconsClass] + ' ' + styles.feature_icon}></span>
          {t('feature' + i)}
        </li>
      );
    });
    return arr;
  }

  return (
    <>
<<<<<<< HEAD
=======
      <Header isAuthorized={isAuthorized} />
>>>>>>> develop
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className="wrapper">
            <h2 className={styles.greeting}>{t('welcome')}</h2>
<<<<<<< HEAD
            {isAuth && (
              <Link to="/main" className={'btn ' + styles.get_started_btn}>
                {t('start')}
              </Link>
=======
            {isAuthorized && (
              <button className={'btn ' + styles.get_started_btn}>{t('start')}</button>
>>>>>>> develop
            )}
          </div>
        </div>
        <div className={styles.about_wrapper + ' wrapper'}>
          <div className={styles.about_app}>
            <h3 className={styles.description_header}>{t('description-header')}</h3>
            <p className={styles.description}>{t('description')}</p>
            <ul className={styles.list}>{createList()}</ul>
          </div>
        </div>
        <Team />
<<<<<<< HEAD
=======
        <Footer />
>>>>>>> develop
      </main>
    </>
  );
};
<<<<<<< HEAD

export default WelcomePage;
=======
>>>>>>> develop
