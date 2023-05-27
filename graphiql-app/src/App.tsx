import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization/SignUp/SignUp';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthRoutes from './components/AuthRoutes';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser, setPending, removeUser } from './redux/store/userSlice';
import { useAuth } from './hooks/use-auth';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { isAuth } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setPending(false));
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      } else {
        dispatch(removeUser());
      }
      dispatch(setPending(false));
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/main" element={isAuth ? <MainPage /> : <Navigate to="/" replace />} />
          <Route element={<AuthRoutes />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
