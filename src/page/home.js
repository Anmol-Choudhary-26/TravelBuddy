import React from 'react';
import '../styles/App.css';
import logo from '../images/temperature.png';
import TripPost from '../component/card';
import PopularDestination from '../component/popularDestination';
import Footer from '../component/footer';
import data from '../utils/data';
import { useNavigate } from 'react-router-dom';
function Home (){
  const navigate = useNavigate()
    const renderedItems = data.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )

        
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
        <button onClick={() => navigate('/login')} className="Btn">Login</button>
        <button onClick={() => navigate('/signup')} className='Btn'>Create Account</button>
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
        <h2><a href="/login">Click here for All Upcoming Journeys</a></h2>
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