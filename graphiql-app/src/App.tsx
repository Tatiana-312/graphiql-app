import { Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization/SignUp/SignUp';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser, setPending } from './redux/store/userSlice';
import { useAuth } from './hooks/use-auth';
import Layout from './components/Layout/Layout';

function App() {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { pending } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      navigate('/');

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
    return <>Loading...</>; //будем ли делать красивый компонент?
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          {/* <Route element={<PrivateRoute />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route> */}
          <Route
            path="sign-in"
            element={
              <PrivateRoute>
                <SignIn />
              </PrivateRoute>
            }
          />
          <Route
            path="sign-up"
            element={
              <PrivateRoute>
                <SignUp />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
