import '../styles/login.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import sideimage from '../images/bg.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from'react';
import supabase from '../component/supabase.js';



function Login(){

    const navigate = useNavigate()

    const handleSignup = async () =>{
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/main',
            }
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
            await supabase.auth.getUser().then((value) => { if (value.data?.user) console.log(value.data) })
        }
        getUser()
    },[])

   return(
    <div className='loginfullpage'>
       
    <div className='login'>

                <div className='firsthead'>
                    <img src={image} alt="logo" className='immage' />
                    <h2>TravelBuddy</h2>
                </div>

                <div className='secondhead'>
                    <h2>Log in to your account</h2>
                </div>

        <div className='thirdhead'>
            <h2>Don't have an account?</h2>
            <a href='/signup'>Sign Up</a>
        </div>  

        <div onClick = {() => handleSignup()} className='buttons'>

       
            <button className='btn1'><img src={googlelogo}  className='glogo'/>Google</button>
        </div>

                <div className='fourthhead'>
                    <p >---Or with email and password---</p>
                </div>


                <div className='email'>

                    <h4>Email Address</h4>
                    <input type='email' className='emailinput' />
                </div>

                <div className='password'>

                    <h4>Password</h4>
                    <input type='password' className='password' />


                </div>


                <button className='Btn2'>Next</button>

            </div>

            <div className='loginsidepage'>

            </div>



        </div>

    )



}

export default Login;
