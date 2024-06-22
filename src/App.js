import React from 'react';
import './styles/App.css';
import logo from "./images/temperature.png"; 
import PopularDestination from './component/popularDestination';
import Footer from './component/footer';
function App(){

      return(
        <React.Fragment>
        <div className="first">
            <div className='top'>

            <div className="logoo">
            <img className="logoimg" src={logo} alt='Logo'/>
            <p className='heading'>TravelBuddy :)</p>
            </div>
            <div className='btns'>
            <button className="Btn">Login</button>
            <button className='Btn'>Create Account</button>
            </div>

            </div>

            <div className='description'>
              <p>Most people agree travelling is a good thing. People think it’s exciting, almost invigorating to travel. Travelling is the best way to learn new things, whether it be a new language or new culture because you’re experiencing it first hand instead of just reading or looking at pictures. It broadens your view of the world. For me travelling means stress and anxiety (both of which I try to block out). Travelling means being out of my comfort zone, especially when I’m with people I barely know </p>            
            </div>

            <div className='showAll'>
              <a href='abc'>Show All</a>
            </div>

            <div className='containers'>
        
              <div className='box'>
                  box1
              </div>
              <div className='box'>
                  box2
              </div>
              <div className='box'>
                  box3
              </div>
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

export default App;