import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Burger.module.scss';

interface BurgerProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.burger_background} onClick={() => onClick()}>
      <div className={styles.burger_btns} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={() => onClick()}></div>
        <button className={'btn ' + styles.sign_btn}>{t('sign-in')}</button>
        <button className={'btn ' + styles.sign_btn}>{t('sign-up')}</button>
      </div>
    </div>
  );
};
