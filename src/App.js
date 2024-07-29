import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Signup from './page/signup';
import Main from './page/main';
import Edit from './page/editProfile';
import Notifications from './page/notifications';
import Profile from './page/profile';
import Chat from './page/chat';

function App() {
   
      return (
            <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/main' element={<Main />} />
                  <Route path='/edit' element={<Edit />} />
                  <Route path='/notification' element={<Notifications />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/chat' element={<Chat />} />
            </Routes>

      )

}

export default App;