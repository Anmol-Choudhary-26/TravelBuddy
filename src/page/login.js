import '../styles/login.css';
import image from '../images/temperature.png';
import googlelogo from '../images/googlelogo.webp';

function Login(){
   return(
    <div className='loginfullpage'>
       
    <div className='login'>

        <div className='firsthead'>
        <img src={image} alt="logo" className='image'/>
        <h2>TravelBuddy</h2>
        </div>

        <div className='secondhead'>
            <h2>Log in to your account</h2>
        </div>

        <div className='thirdhead'>
            <h2>Don't have an account?</h2>
            <a href='abc'>Sign Up</a>
        </div>  

        <div className='buttons'>
       
            <button className='btn1'><img src={googlelogo} alt="logo" className='glogo'/>Google</button>
        </div>

        <div className='fourthhead'>
        <p >---Or with email and password---</p>
        </div>

        <div className='email'>

            <h4>Email Address</h4>
            <input type='email'className='emailinput'/>
        </div>

        <div className='password'>

        <h4>Password</h4>  
        <input type='password'className='password'/>
        
        </div>

        <button className='btn2'>Next</button>

    </div>

    <div className='loginsidepage'>

    </div>



    </div>

   )

    

}

export default Login;
