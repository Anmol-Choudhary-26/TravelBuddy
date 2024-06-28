import '../styles/signup.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import { createClient } from '@supabase/supabase-js'
import React, {useState, useEffect } from 'react';

const supabase = createClient(
    "https://tpkszvmuasfiyaloquii.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa3N6dm11YXNmaXlhbG9xdWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NzY5NTIsImV4cCI6MjAzNTE1Mjk1Mn0.2IrSRNr1j2q-3tXMwqHkpyfg5PMG8Wjyyb_1-cOcV4s"
)

function Signup(){
 
        const handleSignup = async () =>{
            supabase.auth.signInWithOAuth({
                provider: 'google',
              })
              
        }
    return(
        <div className='signup'>

            <div className='sidesignup'>
                

            </div>

            <div className='signuppage'>


            <div className='Firsthead'>
        <img src={image} alt="logo" className='Image'/>
        <h2>TravelBuddy</h2>
        </div>

        <div className='Secondhead'>
            <h2>Create your account</h2>
        </div>

        <div className='Thirdhead'>
            <h2>Have an account?</h2>
            <a href='/login'>Log in now</a>
        </div>  

        <div onClick = {() => handleSignup()}className='Buttons'>
       
            <button className='Btn1'><img src={googlelogo} alt="logo" className='Glogo'/>Google</button>
        </div>

        <div className='Fourthhead'>
        <p >---Or with email and password---</p>
        </div>

        <div className='Email'>

            <h4>Email Address</h4>
            <input type='email'className='Emailinput'/>
        </div>

        <div className='Password'>

        <h4>Password</h4>  
        <input type='password'/>
        
        </div>

        <div className='Password'>

        <h4>First Name</h4>  
        <input type='text'/>

</div>


<div className='Password'>

<h4>Last Name</h4>  
<input type='text'/>

</div>

<div className='checkbox' >
                    <input id="checkbox-1" type="checkbox" name="tos" />
                    <div className='policybox'>I accept the&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/legal/privacy-policy">Privacy Policy</a>&nbsp;and the&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/cloud-terms-and-conditions">Terms of Service</a>
                    </div>

                </div>


<button className='btn2'>Sign up</button>


</div>

</div>
           
    )



}

export default Signup;