import '../styles/profile.css'
import "../styles/profile.css";
import React, { useEffect, useState } from 'react';
import profilepic from '../images/Pc.jpeg';
import contact from '../images/Phone.png';
import birth from '../images/Birth.png';
import gender from '../images/Gender.png';
import address from '../images/Home.svg';
import { useNavigate } from 'react-router-dom';
import supabase from '../component/supabase.js';
import BackgroundSlider from '../component/backgroundslider.js';
import { getUser } from '../hooks/useUser.js';

import Sidebar from '../component/sidebar.js';


function Profile() {
   const navigate = useNavigate()
   const [user, setUser] = useState({})
   useEffect(() => {
      async function fetchData() {
          const userId = JSON.parse(localStorage.getItem('userId'))
          console.log(userId)
            const data = await getUser(userId);
            setUser(data);
            console.log(data);
         };
      fetchData();

   }, [])

   console.log(user)

   async function signout() {
      console.log('Sign out')
      await supabase.auth.signOut()
      localStorage.removeItem("userId")
      localStorage.removeItem("email")
      localStorage.removeItem("userData")
   }
   return (
   
      <div className="Profile">

         <div className="personalDetails">
         <div className='sidebarr'>
            <Sidebar />
            </div>
            <div className='Image'>
           
               <img src={profilepic} alt="profilepic"></img>

            </div>

            <div className="name">
               <h3>{user.FullName}</h3>
            </div>

            <div className="Boxx">
               <img src={birth} className="immage" alt='birth'></img>
               <div>
                  <p>Date Of Birth</p>
                  <p><b>{user.dob}</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={gender} className="immage" alt='gender'></img>
               <div>
                  <p>Gender</p>
                  <p><b>{user.gender}</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={contact} className="immage" alt='contact'></img>
               <div>
                  <p>Contact Info.</p>
                  <p><b>{user.phoneNumber}</b></p>
               </div>
            </div>
            <div className="Boxx">
               <img src={contact} className="immage" alt='contact'></img>
               <div>
                  <p>Emergency Contacts</p>
                  <p><b>{user.emergencyContact}</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={address} className="immage" alt='contact' style={{ backgroundColor: 'white', borderRadius: 50 }}></img>
               <div>
                  <p>Address</p>
                  <p><b>{user.Address}</b></p>
               </div>
            </div>
            <div className='lgoutbtn'>
               <button onClick={() => navigate('/edit')}>Edit Profile</button>
               <button onClick={() => navigate("/userprofile")}>Create User</button>
               <button onClick={() => {
                  signout()
                  navigate('/')
               }
               }>Log Out</button>

              


            </div>
         </div>
         <div className='ProfileOther'>
            <BackgroundSlider />
         </div>

      </div>

   )


}

export default Profile;