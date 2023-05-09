import { useTranslation } from 'react-i18next';
import styles from './Burger.module.scss';

export function BurgerMenu(props: { onClick: () => void }) {
  const { t } = useTranslation();

  return (
    <div className={styles.burgerBackground} onClick={() => props.onClick()}>
      <div className={styles.burgerBtns} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={() => props.onClick()}></div>
        <button className={'btn ' + styles.signBtn}>{t('sign-in')}</button>
        <button className={'btn ' + styles.signBtn}>{t('sign-up')}</button>
      </div>
    </div>
  );
}
