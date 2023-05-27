import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { FC } from 'react';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setFormLoading, setUser } from '../../../redux/store/userSlice';
import { AuthFormFields } from '../../../types/authTypes';
import { toast } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from '../../../components/ErrorBoundaryFallback/ErrorBoundaryFallback';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const handleSignUp = (data: AuthFormFields) => {
    dispatch(setFormLoading(true));
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(setFormLoading(false));
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      })
      .catch((e) => {
        toast.error(e.message);
        dispatch(setFormLoading(false));
      });
  };

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <main>
        <AuthForm submitFunction={handleSignUp} type="SignUp" />
      </main>
    </ErrorBoundary>
  );
};

export default SignUp;
