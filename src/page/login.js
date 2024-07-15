import '../styles/login.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from'react';
import supabase from '../component/supabase.js';




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
            navigate('/main')
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


                <div className='email'>

                    <h4>Email Address</h4>
                    <input type='email' name="email" placeholder="enter email address"
                        value={signup.email}
                        onChange={handleChange}   className='emailinput' />
                </div>

                <div className='password'>

                    <h4>Password</h4>
                    <input type='password' name="password" placeholder="enter password"
                        value={signup.password}
                        onChange={handleChange}  className='password' />


                </div>


                <button onClick={() => signInWithEmail()} className='Btn2'>Next</button>

            </div>

            <div className='loginsidepage'>

            </div>



        </div>

    )



}

export default Login;