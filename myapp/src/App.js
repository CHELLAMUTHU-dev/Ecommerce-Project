import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import './App.css';
import Login from './components/Login';
import Signup from './components/Register';
import Home from './components/Home';

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
