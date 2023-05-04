import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './WelcomePage.module.scss';

export function WelcomePage() {
  const isAuthorized = true;
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main className="main">
        <div className={styles.welcome}>
          <h2 className={styles.greeting}>Welcome to GraphQL</h2>
          {isAuthorized && <button className={'btn ' + styles.getStartedBtn}>Get Started</button>}
        </div>
        <div className={styles.aboutUs}>About us</div>
      </main>
    </>
  );
}
