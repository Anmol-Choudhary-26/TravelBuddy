import '../styles/profile.css'
import "../styles/profile.css";
import React from 'react';
import profilepic from '../images/Pc.jpeg';
import contact from '../images/Phone.png';
import birth from '../images/Birth.png';
import gender from '../images/Gender.png';
import address from '../images/Home.svg';
import { useNavigate } from 'react-router-dom';
import supabase from '../component/supabase.js';



function Profile() {
   const navigate = useNavigate()
   async function signout() {
      console.log('Sign out')
      const { error } = await supabase.auth.signOut()
   }
   return (

      <div className="Profile">

         <div className="personalDetails">

            <div className='Image'>
               <img src={profilepic} alt="profilepic"></img>
            </div>

            <div className="name">
               <h3>Akash</h3>
            </div>

            <div className="Boxx">
               <img src={birth} className="immage" alt='birth'></img>
               <div>
                  <p>Date Of Birth</p>
                  <p><b>13 May ,2002</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={gender} className="immage" alt='gender'></img>
               <div>
                  <p>Gender</p>
                  <p><b>Male</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={contact} className="immage" alt='contact'></img>
               <div>
                  <p>Contact Info.</p>
                  <p><b>8219749197</b></p>
               </div>
            </div>
            <div className="Boxx">
               <img src={contact} className="immage" alt='contact'></img>
               <div>
                  <p>Emergency Contacts</p>
                  <p><b>8894946575</b></p>
               </div>
            </div>

            <div className="Boxx">
               <img src={address} className="immage" alt='contact' style={{ backgroundColor: 'white', borderRadius: 50 }}></img>
               <div>
                  <p>Address</p>
                  <p><b>Una, Himachal Pradesh</b></p>
               </div>
            </div>
            <div className='lgoutbtn'>
               <button onClick={() => navigate('/edit')}>Edit Profile</button>
               <button onClick={() => {
                  signout()
                  navigate('/')
               }
               }>Log Out</button>


            </div>


            {/* <div className="Box">
                <img src="Phone.png" className="immage"></img>
                   <div>
                   <p>Insurance Provider</p>
                   <p><b>{profile.insuranceProvider}</b></p>
                   </div>  */}
         </div>

         {/* <button className="buton">Show All Information</button> */}

      </div>

   )


}

export default Profile;