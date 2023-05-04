import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

export function Header(props: { isAuthorized: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? styles.header + ' ' + styles.scrolled : styles.header}>
      <div className={'wrapper ' + styles.headerWraper}>
        <div className={styles.graphqlHeader}>
          <div className={styles.logo}></div>
          <h1>GraphQL</h1>
        </div>
        <div className="users-btns">
          {props.isAuthorized ? (
            <>
              <button className="btn sign-in-btn">Sign In</button>
              <button className="btn sign-up-btn">Sign Up</button>
            </>
          ) : (
            <button className="btn SignOut"></button>
          )}
        </div>
      </div>
    </header>
  );
}
