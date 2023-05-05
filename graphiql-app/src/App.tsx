import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './views/Authorization/SignIn/SignIn';
import SignUp from './views/Authorization/SignUp/SignUp';
import Home from './views/Home/Home';

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
