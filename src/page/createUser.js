import '../styles/user.css';
import React , {useState} from 'react';
import {createUser} from '../hooks/useUser';
import BackgroundSlider from '../component/backgroundslider';
import Sidebar from '../component/sidebar';
import { useNavigate } from 'react-router-dom';


function Edit() {
   const email = localStorage.getItem('email');
        const [userData , setUserData] = useState({
            email: email,
        });
        const navigate = useNavigate();

        const handleChange = (e) => {
            const {name , value} = e.target;
            setUserData({...userData , [name] : value});
        };

        const handleSubmit = async () =>{
            const data = await createUser(userData);
            console.log(data);
            console.log('User created successfully');
            if(data){
                navigate('/main')
            }
        }

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

                <h4>username</h4>
                <input type='text' 
                name = "username"
                placeholder='username'
                value = {userData.username}
                onChange={handleChange}
                className='paSsword' />

            </div>

            <div className='paSsword'>
                <h4>Phone Number</h4>

                <input type='text' 
                 name="phoneNumber"
                 placeholder='phone number'
                 onChange={handleChange}   
                className='emailinput' />
    
            </div>

            <div className='paSsword'>
                <h4>emergency Contact</h4>

                <input type='text' 
                 name="emergencyContact"
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


            <button onClick={ handleSubmit} type='submit' className='BTn'>Create</button>

        </div>

        <div className='OthersidE'>
                <BackgroundSlider />
        </div>

        </div>

        

    )

}

export default Edit;