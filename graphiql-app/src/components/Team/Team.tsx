import styles from './Team.module.scss';
import { useTranslation } from 'react-i18next';

export function Team() {
  const { t } = useTranslation();

  return (
    <div className={styles.team + ' wrapper'}>
      <h3 className={styles.title}>{t('developers')}</h3>
      <ul className={styles.list}>
        <li className={styles.developer}>
          <div className={styles.photoWrap}></div>
          <div className={styles.profile}>
            <h4 className={styles.name}>{t('tatiana')}</h4>
            <p className={styles.role}>{t('teamLead')}</p>
            <p className={styles.responsibility}>{t('tatianaResp')}</p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photoWrap}></div>
          <div className={styles.profile}>
            <h4 className={styles.name}>{t('altynbek')}</h4>
            <p className={styles.role}>{t('teamMember')}</p>
            <p className={styles.responsibility}>{t('altynbekResp')}</p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photoWrap}>
            <div className={styles.photoDiana}></div>
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
}
