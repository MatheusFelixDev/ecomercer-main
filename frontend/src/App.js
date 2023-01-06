import './App.css';
import "react-toastify/dist/ReactToastify.css";

import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
        <ToastContainer/>
          <NavBar/>
          <Routes>

            <Route path='/'  exact element={<Home/>}/>
            <Route path='/cart' exact element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/not-found' element={<NotFound/>}/>
            
            
          </Routes>
        
        </BrowserRouter>
    
    
    
    
    
    </div>
  );
}

export default App;
