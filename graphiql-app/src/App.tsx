import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization/SignUp/SignUp';
import Home from './pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser, setPending } from './redux/store/userSlice';
import { useAuth } from './hooks/use-auth';

function App() {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { pending } = useAuth();

  useEffect(() => {
    const authChange = async () => {
      await onAuthStateChanged(auth, (user) => {
        console.log('Here1');

        //   setCurrentUser(user);
        //   setPending(false);
        if (user) {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken,
            })
          );
        }
        dispatch(setPending(false));
      });
    };

    authChange();
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
