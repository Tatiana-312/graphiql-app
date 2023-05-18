import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization/SignUp/SignUp';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser, setPending } from './redux/store/userSlice';
import { useAuth } from './hooks/use-auth';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { pending } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      } else {
        dispatch(
          setUser({
            email: null,
            id: null,
            token: null,
          })
        );
      }
      dispatch(setPending(false));
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
