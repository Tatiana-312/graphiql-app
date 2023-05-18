import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../redux/store/userSlice';
import { AuthFormFields } from '../../../types/authTypes';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (data: AuthFormFields) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/main');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <main>
      <ToastContainer />
      <AuthForm submitFunction={handleLogin} />
    </main>
  );
};

export default SignIn;
