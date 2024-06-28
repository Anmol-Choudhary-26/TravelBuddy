import '../styles/editProfile.css';
import profile from '../images/Pc.jpeg';


function Edit() {

    return (


            <div className='editfullpage'>

        <div className="edit">

           <div className='Headingg'>
           <h1>Edit Profile</h1>
           </div>

           <div className='profileimage'>
                <img src={profile} alt='profile'/>
            </div>

            <div className='email'>

                <h4>Email Address</h4>
                <input type='email' className='emailinput' />
            </div>

            <div className='password'>

                <h4>Password</h4>
                <input type='password' className='password' />

            </div>



            <div className='password'>

                <h4>Full Name</h4>
                <input type='text' className='emailinput' />
            </div>

            <div className='password'>
                <h4>Phone Number</h4>

             <input type='text' className='emailinput' />
            </div>

            <div className='textbox'>
                <h4>Full Address</h4>
                <input type='text' className='textbox' />
            
            </div>


            <div className='textbox'>
                <h4>Bio</h4>
                <input type='text' className='textbox' placeholder='write something about yourself...' />
            
            </div>


            <button type='submit' className='BTN'>Update</button>

        </div>

        <div className='otherside'>

        </div>

        </div>

        

    )

}

export default Edit;