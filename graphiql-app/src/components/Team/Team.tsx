import { FC } from 'react';
import styles from './Team.module.scss';
import { useTranslation } from 'react-i18next';

const Team: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.team + ' wrapper'}>
      <h3 className={styles.title}>{t('developers')}</h3>
      <ul className={styles.list}>
        <li className={styles.developer}>
          <div className={styles.photo_wrap}>
            <div className={styles.photo + ' ' + styles.photo_tatiana}></div>
          </div>
          <div className={styles.profile}>
            <h4 className={styles.name}>{t('tatiana')}</h4>
            <p className={styles.role}>{t('teamLead')}</p>
            <p className={styles.responsibility}>{t('tatianaResp')}</p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photo_wrap}>
            <div className={styles.photo + ' ' + styles.photo_altyn}></div>
          </div>
          <div className={styles.profile}>
            <h4 className={styles.name}>{t('altynbek')}</h4>
            <p className={styles.role}>{t('teamMember')}</p>
            <p className={styles.responsibility}>{t('altynbekResp')}</p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photo_wrap}>
            <div className={styles.photo + ' ' + styles.photo_diana}></div>
          </div>
          <div className={styles.profile}>
            <h4 className={styles.name}>{t('diana')}</h4>
            <p className={styles.role}>{t('teamMember')}</p>
            <p className={styles.responsibility}>{t('dianaResp')}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Team;
