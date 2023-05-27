import { FC } from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footer_wrapper}>
          <div>
            <ul className={styles.list}>
              <li>
                <a href="https://github.com/Tatiana-312" className={styles.link}>
                  {t('tatiana')}
                </a>
              </li>
              <li>
                <a href="https://github.com/AnarbekovAlt" className={styles.link}>
                  {t('altynbek')}
                </a>
              </li>
              <li>
                <a href="https://github.com/DianaSmertina" className={styles.link}>
                  {t('diana')}
                </a>
              </li>
            </ul>
          </div>
          <div>2023</div>
          <a href="https://rs.school/react/">
            <div className={styles.rs_logo}></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
