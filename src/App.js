import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Signup from './page/signup';
// import Main from './page/main';
import Edit from './page/editProfile';
import Profile from './page/profile';
import Chat from './page/chat';
import User from './page/createUser';
import Search from './page/search';
import Bookmark from './page/bookmark';
import Chatbot from './component/chatbot';
import CreateUser from './page/createUser';
import MainNew from './page/Mainnew';



function App(){

      return(
        <>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<MainNew />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/postbookmark' element={<Bookmark />} />
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/msg' element={<Chat />} />  
        <Route path='/userprofile' element={<User />} />
        <Route path='/searchpost' element={<Search />} />
        <Route path='/createuser' element={<CreateUser />} />
        </Routes> 
       <Chatbot/>
   
      
       </>
      )

}

export default App;