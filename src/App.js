import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Signup from './page/signup';
import Main from './page/main';

function App(){

      return(
       <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />

        </Routes> 
       
      )

}

export default App;