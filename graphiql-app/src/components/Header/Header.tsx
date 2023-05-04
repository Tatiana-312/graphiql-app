import React from 'react';

export function Header(props: { isAuthorized: boolean }) {
  return (
    <>
      <header className="header">
        <h1 className="graphql-header">
          <span className="logo"></span>GraphQL
        </h1>
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
      </header>
    </>
  );
}
