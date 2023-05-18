import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/store/userSlice';
import { AuthFormFields } from '../../../types/authTypes';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignUp = (data: AuthFormFields) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/main');
      })
      .catch(console.error);
  };

  return (
    <main>
      <AuthForm submitFunction={handleSignUp} type="SignUp" />
    </main>
  );
};

export default SignUp;
