import '../styles/user.css';
import React , {useState,useEffect} from 'react';
import {updateUser} from '../hooks/useUser';
import BackgroundSlider from '../component/backgroundslider';
import Sidebar from '../component/sidebar';


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

        <div className="eDit">
            <Sidebar />
           <div className='HeAdingg'>
           <h1>Create User</h1>
           </div>

           <div className='profileImage'>
            <div className='pimage'>
            <button>+</button>
            </div>
            </div>

            <div className='emAil'>

                <h4>Email Address</h4>
                <input type='email' name="email" placeholder="email address" 
                value={userData.email}
                onChange={handleChange}
                className='emailinput' />
            </div>

            <div className='paSsword'>

                <h4>Password</h4>
                <input type='password' 
                name = "password"
                placeholder='password'
                value = {userData.password}
                onChange={handleChange}
                className='paSsword' />

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
                className='textBox' />
            
            </div>


            <div className='textBox'>
                <h4>Bio</h4>
                <input type='text' 
                name="shortBio"
                value={userData.shortBio}
                onChange={handleChange}
                className='textBox' 
                placeholder='write something about yourself...' />
            
            </div>


            <button onclick={() => handleSubmit()} type='submit' className='BTn'>Create</button>

        </div>

        <div className='OthersidE'>
                <BackgroundSlider />
        </div>

        </div>

        

    )

}

export default Edit;