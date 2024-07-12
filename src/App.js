import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Signup from './page/signup';
import Main from './page/main';
import Edit from './page/editProfile';
import Profile from './page/profile';
import Chat from './page/chat';
import User from './page/createUser';
import Search from './page/search';
import Bookmark from './page/bookmark';

function App(){

      return(
       <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />
        <Route path='/edit' element={<Edit />} />
      <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/chat' element={<Chat />} />  
        <Route path='/user' element={<User />} />
        <Route path='/search' element={<Search />} />
        </Routes> 
       
      )

}

export default App;