import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import Category from './pages/Category';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Service from './pages/Service';


function App() {

    const needLoginPage = () => {
        if (!!localStorage.getItem('token')) {

        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                {true && <Route path='/login' element={<Login />}> </Route>}
                <Route path='/categories' element={<CategoryList />}> </Route>
                <Route path='/categories/:id' element={<Category />}> </Route>
                <Route path='/service' element={<Service />}> </Route>
                <Route path='/order' element={<Order />}> </Route>
                <Route path='/signup' element={<SignUp />}> </Route>
                <Route path='/profile' element={<Profile />}> </Route>


            </Routes>
        </BrowserRouter>
    )
}


export default App

// cai chu App no phai co mau vang a fen