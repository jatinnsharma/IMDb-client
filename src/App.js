import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signin from './components/auth/Signin';

function App() {
  return (
    <div >
      <Navbar/>
      <Signin/>
    </div>
  );
}

export default App;
