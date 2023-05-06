import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/Authorization/SignIn/SignIn';
import SignUp from './pages/Authorization/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
