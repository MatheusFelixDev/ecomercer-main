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
import CheckoutSuccess from './components/checkoutSuccess';

import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import CreateProduct from './components/admin/CreateProduct';

function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
        <ToastContainer/>
          <NavBar/>
          <Routes>

            <Route path='/'  exact element={<Home/>}/>
            <Route path='/cart' exact element={<Cart/>}/>
            <Route path='/checkout-success'  element={<CheckoutSuccess/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Dashboard/>}>
              <Route path='products' element={<Products/>}>
                <Route path='create-product' element={<CreateProduct/>}/>
              </Route>
              <Route path='summary' element={<Summary/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            
            
          </Routes>
        
        </BrowserRouter>
    
    
    
    
    
    </div>
  );
}

export default App;
