import React, { FC } from 'react';
import { removeUser } from '../../store/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome! You are LOGGED IN</h1>
      <Link to="/main">Go to Main</Link>
      <br />
      <button
        onClick={() => {
          dispatch(removeUser());
        }}
      >
        Log Out from {email}
      </button>
    </div>
  ) : (
    <>
      <h1>Welcome! You are NOT logged in</h1>
      <Link to="sign-in">Sign In</Link>
      <br></br>
      <Link to="sign-up">Sign Up</Link>
    </>
  );
};

export default Home;
