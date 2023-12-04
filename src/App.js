
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/auth/SignUp';
import Home from './components/Home';
import EmailVerification from './components/auth/EmailVerification';
import ForgetPassword from './components/auth/ForgetPassword';
import { ConfirmPassword } from './components/auth/ConfirmPassword';
import Login from './components/auth/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    < >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/auth/sign-up' element={<SignUp/>}/>
        <Route path='/auth/verification' element={<EmailVerification />}/>
        <Route path='/auth/forget-password' element={<ForgetPassword/>}/>
        <Route path='/auth/confirm-password' element={<ConfirmPassword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
  