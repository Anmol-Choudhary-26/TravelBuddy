import '../styles/editProfile.css';
import profile from '../images/Pc.jpeg';
import React , {useState,useEffect} from 'react';
import {updateUser} from '../hooks/useUser';


function Edit() {
        const [userData , setUserData] = useState({});

        const handleChange = (e) => {
            const {name , value} = e.target;
            setUserData({...userData , [name] : value});
        };

        async function handleSubmit(){
            const data = await updateUser(userData);
            console.log(data);
            console.log('User created successfully');
        }

        useEffect(() => console.log(userData));

    return (


            <div className='editfullpage'>

        <div className="edit">

           <div className='Headingg'>
           <h1>Create User</h1>
           </div>

           <div className='profileimage'>
                <img src={profile} alt='profile'/>
            </div>

            <div className='email'>

                <h4>Email Address</h4>
                <input type='email' name="email" placeholder="email address" 
                value={userData.email}
                onChange={handleChange}
                className='emailinput' />
            </div>

            <div className='password'>

                <h4>Password</h4>
                <input type='password' 
                name = "password"
                placeholder='password'
                value = {userData.password}
                onChange={handleChange}
                className='password' />

            </div>



            <div className='password'>

                <h4>Full Name</h4>
                <input type='text'
                name='FullName'
                placeholder='Full Name'
                value={userData.FullName}
                onChange={handleChange}
                className='emailinput' />
               
            </div>

            <div className='password'>
                <h4>Phone Number</h4>

                <input type='text' 
                 name="phoneNumber"
                 placeholder='phone number'
                 onChange={handleChange}   
                className='emailinput' />
    
            </div>

            <div className='textbox'>
                <h4>Full Address</h4>
                <input type='text' 
                name='Address'
                placeholder='full address'
                value={userData.Address}
                onChange={handleChange}
                className='textbox' />
            
            </div>


            <div className='textbox'>
                <h4>Bio</h4>
                <input type='text' 
                name="shortBio"
                value={userData.shortBio}
                onChange={handleChange}
                className='textbox' 
                placeholder='write something about yourself...' />
            
            </div>


            <button onclick={() => handleSubmit()} type='submit' className='BTN'>Create</button>

        </div>

        <div className='otherside'>

        </div>

        </div>

        

    )

}

export default Edit;