import styles from './Burger.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeUser } from '../../../redux/store/userSlice';

interface BurgerProps {
  onClick: () => void;
}

const BurgerMenu: FC<BurgerProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const location = useLocation();

  return (
    <div className={styles.burger_background} onClick={() => onClick()}>
      <div className={styles.burger_btns} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={() => onClick()}></div>
        {isAuth ? (
          <>
            {location.pathname !== '/main' ? (
              <Link to="/main" className={'btn ' + styles.sign_btn} onClick={() => onClick()}>
                {t('go-to-main')}
              </Link>
            ) : (
              <></>
            )}
            <button
              className={'btn ' + styles.sign_btn}
              onClick={() => {
                signOut(auth);
                dispatch(removeUser());
                onClick();
              }}
            >
              {t('sign-out')}
            </button>
          </>
        ) : (
          <>
            <Link to="/sign-in" className={'btn ' + styles.sign_btn} onClick={() => onClick()}>
              {t('sign-in')}
            </Link>
            <Link to="/sign-up" className={'btn ' + styles.sign_btn} onClick={() => onClick()}>
              {t('sign-up')}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
