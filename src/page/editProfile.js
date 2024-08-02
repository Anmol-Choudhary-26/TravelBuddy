import '../styles/editProfile.css';
import profile from '../images/Pc.jpeg';
import React , {useState} from 'react';
import {updateUser} from '../hooks/useUser';
import BackgroundSlider from '../component/backgroundslider';

import Sidebar from '../component/sidebar.js';


function Edit() {
        const [userData , setUserData] = useState({
            profilePic: ""
        });

        const handleChange = (e) => {
            const {name , value} = e.target;
            setUserData({...userData , [name] : value});
        };

        async function handleSubmit(){
            console.log('clicked')
            const data = await updateUser(userData);
            console.log(data);
            console.log('User created successfully');
            alert("Profile Updated successfully")
        }

       

    return (


            <div className='editfullpage'>

        <div className="eDit">
         
           <div className='HeAdinggg'>
           <Sidebar />
           <h1>Edit Profile</h1>

           </div>

           <div className='profileImage'>


                <img src={profile} alt='profile'/>
            </div>

            <div className='emAil'>

                <h4>Username</h4>
                <input type='text' name="username" placeholder="enter username" 
                value={userData.email}
                onChange={handleChange}
                className='emailinput' />
            </div>

            



            <div className='paSsword'>

                <h4>Full Name</h4>
                <input type='text'
                name='FullName'
                placeholder='Full Name'
                value={userData.FullName}
                onChange={handleChange}
                className='emailinput' />
               
            </div>

            <div className='paSsword'>

                <h4>Gender</h4>
                <input type='text' 
                name = "gender"
                placeholder='gender'
                value = {userData.password}
                onChange={handleChange}
                className='password' />

            </div>

            <div className='paSsword'>

                <h4>Date of Birth</h4>
                <input type='date' 
                name = "DOB"
               
                value = {userData.password}
                onChange={handleChange}
                className='password' />

                </div>


            <div className='paSsword'>
                <h4>Phone Number</h4>

                <input type='text' 
                 name="phoneNumber"
                 placeholder='phone number'
                 onChange={handleChange}   
                className='emailinput' />
    
            </div>

            <div className='textBox'>
                <h4>Full Address</h4>
                <input type='text' 
                name='Address'
                placeholder='full address'
                value={userData.Address}
                onChange={handleChange}
                className='textbox' />
            
            </div>


            <div className='textBox'>
                <h4>Bio</h4>
                <input type='text' 
                name="shortBio"
                value={userData.shortBio}
                onChange={handleChange}
                className='textbox' 
                placeholder='write something about yourself...' />
            
            </div>


            <button onClick={() => handleSubmit()} type='submit' className='BTn'>Update</button>

        </div>

        <div className='OthersidE'>
            <BackgroundSlider />
        </div>

        </div>

        

    )

}

export default Edit;