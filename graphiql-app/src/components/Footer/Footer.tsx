import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footerWrapper}>
          <div>
            <ul className={styles.list}>
              <li>
                <a href="https://github.com/Tatiana-312" className={styles.link}>
                  Tatiana Kuznetsova
                </a>
              </li>
              <li>
                <a href="https://github.com/AnarbekovAlt" className={styles.link}>
                  Altynbek Anarbekov
                </a>
              </li>
              <li>
                <a href="https://github.com/DianaSmertina" className={styles.link}>
                  Diana Smertina
                </a>
              </li>
            </ul>
          </div>
          <div>2023</div>
          <a href="https://rs.school/react/" className={styles.rsLink}>
            <div className={styles.rsLogo}></div>
          </a>
        </div>
      </div>
    </footer>
  );
}
