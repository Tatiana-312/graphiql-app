import React from 'react';
import { Header } from '../../components/Header/Header';

export function WelcomePage() {
  const isAuthorized = true;
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main>
        <div className="welcome">
          <h1 className="greeting">Welcome to GraphQL</h1>
          {isAuthorized && <button className="btn get-started-btn">Get Started</button>}
        </div>
        <div className="about-us">About us</div>
      </main>
    </>
  );
}
