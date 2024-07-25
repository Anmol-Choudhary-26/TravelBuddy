import '../styles/login.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from'react';
import supabase from '../component/supabase.js';
import { findUserByEmail } from '../hooks/useUser.js';
// import Sidebar from '../component/sidebar.js';





function Login(){

    
     const [signup , setSignupData] = useState({
        email: '',
        password: '',
     });
 
     const handleChange = (e) => {
         const {name , value} = e.target;
         setSignupData({...signup , [name] : value});
         console.log(signup);
     };

     async function signInWithEmail() {
        const { data } = await supabase.auth.signInWithPassword({
            email: signup.email,
          password: signup.password,
        })
    
        if(data){
            const user = await findUserByEmail(signup.email)
            localStorage.setItem('email', signup.email)
            if(user){
            navigate('/main')
            }
            else {
                navigate('/createuser')
            }
        }
      }

    const navigate = useNavigate()

    const handleSignup = async () =>{
     supabase.auth.signInWithOAuth({
            provider: 'google',
          })
         
          
    }

    supabase.auth.onAuthStateChange(async (event) => {
        console.log(event)
        if (event === "SIGNED_IN") {
            navigate("/main")
        }
        
    })
    useEffect(() => {
        async function getUser() {
            await supabase.auth.getUser().then((value) => {
                console.log("1", value)
                console.log("2", value.data)
                console.log("3", value.user)
                localStorage.setItem("userId", value.email);
            })
        }
        getUser()
    },[])

   return(
    <div className='loginfullpage'>
       
    <div className='login'>
    
       {/* <Sidebar /> */}
                <div className='firsthead'>
                    <img src={image} alt="logo" className='Immage' />
                    <h2>TravelBuddy</h2>
        
       
                </div>

                <div className='secondhead'>
                    <h2>Log in to your account</h2>
                </div>

        <div className='thirdhead'>
            <h2>Don't have an account?</h2>
           
            <div  onClick={()=> navigate('/signup')} className='logbtn'>
              Sign Up
             </div>
        </div>  

        <div onClick = {() => handleSignup()} className='buttons'>

       
            <button className='btn1'><img src={googlelogo} alt="google logo"  className='glogo'/>Google</button>
        </div>

                <div className='fourthhead'>
                    <p >---Or with email and password---</p>
                </div>


                <div className='EMail'>

                    <h4>Email Address</h4>
                    <input type='email' name="email" placeholder="enter email address..."
                        value={signup.email}
                        onChange={handleChange}   className='emailinput' />
                </div>

                <div className='PAssword'>

                    <h4>Password</h4>
                    <input type='password' name="password" placeholder="enter password..."
                        value={signup.password}
                        onChange={handleChange}  className='password' />


                </div>


                <button onClick={() => signInWithEmail()} className='BTn2'>Next</button>

            </div>

            <div className='loginsidepage'>

            </div>



        </div>

    )



}

export default Login;