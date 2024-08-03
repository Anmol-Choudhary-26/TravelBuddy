import '../styles/signup.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import supabase from '../component/supabase';
import { useNavigate } from 'react-router-dom';
import React, {  useState } from'react';
function Signup() {

    const [signup , setSignupData] = useState({
       email: '',
       password: '',
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setSignupData({...signup , [name] : value});
        console.log(signup);
    };

    const navigate = useNavigate()

    async function signUpNewUser() {
        const { data } = await supabase.auth.signUp({
          email: signup.email,
          password: signup.password,
          
        })
        if(data){
            navigate('/login')
        }
      }

    supabase.auth.onAuthStateChange(async (event) => {
        console.log(event)
        if (event === "SIGNED_IN") {
            navigate("/main")
        }

    })
    const handleSignup = async () => {
       await supabase.auth.signInWithOAuth({
            provider: 'google',
            
        })

    }
    return (
        <div className='signup'>

            <div className='sidesignup'>


            </div>

            <div className='signuppage'>


                <div className='Firsthead'>

                    <img src={image} className='IImage' alt='logo' />

                    <h2>TravelBuddy</h2>
                </div>

                <div className='Secondhead'>
                    <h2>Create your account</h2>
                </div>

                <div className='Thirdhead'>
                    <h2>Have an account? </h2>
                    <div  onClick={()=> navigate('/login')} className='logbtn' >
                       Login Now
                  </div>
                </div>

                <div className='Buttons'>

                    <button onClick={handleSignup} className='Btn1'><img src={googlelogo} className='Glogo' alt="google" />Google</button>
                </div>

                <div className='Fourthhead'>
                    <p >---Or with email and password---</p>
                </div>

                <div className='Email'>

                    <h4>Email Address</h4>
                    <input type='email' name="email" placeholder="enter email address..."
                        value={signup.email}
                        onChange={handleChange} className='Emailinput' />
                </div>

                <div className='Password'>

                    <h4>Password</h4>
                    <input type='password' name="password" placeholder="enter password..."
                        value={signup.password}
                        onChange={handleChange} />

                </div>



                <div className='checkbox' >
                    <input id="checkbox-1" type="checkbox" name="tos" />
                    <div className='policybox'>I accept the&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/legal/privacy-policy">Privacy Policy</a>&nbsp;and the&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/cloud-terms-and-conditions">Terms of Service</a>
                    </div>

                </div>


                <button onClick={() => signUpNewUser()} className='bTn2'>Sign up</button>


            </div>

        </div>

    )



}

export default Signup;