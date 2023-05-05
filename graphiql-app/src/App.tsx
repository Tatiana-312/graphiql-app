import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import SignIn from './views/Authorization/SignIn/SignIn';
import SignUp from './views/Authorization/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
