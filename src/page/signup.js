import '../styles/signup.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import supabase from '../component/supabase';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate()
    supabase.auth.onAuthStateChange(async (event) => {
        console.log(event)
        if (event === "SIGNED_IN") {
            navigate("/main")
        }

    })
    const handleSignup = async () => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options:{
                redirectTo: 'https://travelbudy.netlify.app/main',
            }
            
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
                    <h2>Have an account?</h2>
                    <div  onClick={()=> navigate('/signup')} >
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
                    <input type='email' className='Emailinput' />
                </div>

                <div className='Password'>

                    <h4>Password</h4>
                    <input type='password' />

                </div>

                <div className='Password'>

                    <h4>First Name</h4>
                    <input type='text' />

                </div>


                <div className='Password'>

                    <h4>Last Name</h4>
                    <input type='text' />

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