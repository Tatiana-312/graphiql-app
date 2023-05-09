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
            <h4 className={styles.name}>Tatiana Kuznetsova</h4>
            <p className={styles.role}>Team lead</p>
            <p className={styles.responsibility}>
              Main page, code editor, variables and headers sections, documentation and schema,
              response section
            </p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photoWrap}></div>
          <div className={styles.profile}>
            <h4 className={styles.name}>Altynbek Anarbekov</h4>
            <p className={styles.role}>Team member</p>
            <p className={styles.responsibility}>
              Sign In/Sign Up page, client-side form validation
            </p>
          </div>
        </li>
        <li className={styles.developer}>
          <div className={styles.photoWrap}>
            <div className={styles.photoDiana}></div>
          </div>
          <div className={styles.profile}>
            <h4 className={styles.name}>Diana Smertina</h4>
            <p className={styles.role}>Team member</p>
            <p className={styles.responsibility}>Welcome page and header, localization, design</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
