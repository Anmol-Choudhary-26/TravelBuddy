import '../styles/login.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';
import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    "https://tpkszvmuasfiyaloquii.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa3N6dm11YXNmaXlhbG9xdWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NzY5NTIsImV4cCI6MjAzNTE1Mjk1Mn0.2IrSRNr1j2q-3tXMwqHkpyfg5PMG8Wjyyb_1-cOcV4s"
)
function Login() {
    const navigate = useNavigate()
    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {

        }
        else {

        }
    })
    return (
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

                <div className='buttons'>

                    <button className='btn1'><img src={googlelogo} alt="logo" className='glogo' />Google</button>
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
