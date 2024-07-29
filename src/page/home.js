import React from 'react';
import '../styles/App.css';
import logo from '../images/temperature.png';
import TripPost from '../component/card';
import PopularDestination from '../component/popularDestination';
import Footer from '../component/footer';
import data from '../utils/data';
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
const supabase = createClient(
    "https://tpkszvmuasfiyaloquii.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa3N6dm11YXNmaXlhbG9xdWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NzY5NTIsImV4cCI6MjAzNTE1Mjk1Mn0.2IrSRNr1j2q-3tXMwqHkpyfg5PMG8Wjyyb_1-cOcV4s"
)
function Home (){
  const navigate = useNavigate()
    const renderedItems = data.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )
    })

    supabase.auth.onAuthStateChange(async (event) => {
      console.log(event)
      if (event !== "SIGNED_OUT") {
          navigate("/main")
      }
      
  })

    return(
    <React.Fragment>
    <div className="first">
        <div className='top'>

        <div className="logoo">
        <img className="logoimg" src={logo} alt='Logo'/>
        <p className='headingg'>TravelBuddy :)</p>
        </div>
        <div className='btns'>
          <Link to= "/login" className="Btn">   <button  className="Btn">Login</button></Link>
      
          <Link to= "/signup" className="Btn"><button  className='Btn'>Create Account</button></Link>
        </div>

        </div>

        <div className='description'>
          <div className='headingdesc'>
          <h1>FIND A COMPANION TO EXPLORE THE PLACES...</h1>
          </div>
            
          <div className='headingp'>
          <p>"Finding a companion to explore new places with can make the experience even more enjoyable and memorable. Whether it's a friend who shares your sense of adventure or someone new who brings a fresh perspective, having company can enhance the joy of discovery. </p>
          </div>
        </div>

    </div>
   
     <div className='seconddown'>

        <div className='headings'>
        <h2><a href='abc'>Click here for All Upcoming Journeys</a></h2>
      </div>
        <div className='containers'> 
          
          {renderedItems}
         
        </div>   

     </div>

    <div>
      <PopularDestination />
    </div>

    <div>
      <Footer />
    </div>

   </React.Fragment>   
    )  
}

export default Home;