import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setFormLoading, setUser } from '../../../redux/store/userSlice';
import { AuthFormFields } from '../../../types/authTypes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from '../../../components/ErrorBoundaryFallback/ErrorBoundaryFallback';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (data: AuthFormFields) => {
    const auth = getAuth();
    dispatch(setFormLoading(true));
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setFormLoading(false));
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      })
      .catch((error) => {
        dispatch(setFormLoading(false));
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <main>
        <AuthForm submitFunction={handleLogin} />
      </main>
    </ErrorBoundary>
  );
};

export default SignIn;
