import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Burger.module.scss';
import { Link } from 'react-router-dom';

interface BurgerProps {
  onClick: () => void;
}

const BurgerMenu: FC<BurgerProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.burger_background} onClick={() => onClick()}>
      <div className={styles.burger_btns} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={() => onClick()}></div>
        <Link to="/sign-in" className={'btn ' + styles.sign_btn} onClick={() => onClick()}>
          {t('sign-in')}
        </Link>
        <Link to="/sign-up" className={'btn ' + styles.sign_btn} onClick={() => onClick()}>
          {t('sign-up')}
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
