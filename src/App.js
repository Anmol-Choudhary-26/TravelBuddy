import React from 'react';
import './styles/App.css';
import logo from "./images/temperature.png"; 
import PopularDestination from './component/popularDestination';
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
              <p>abc</p>            
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

       </React.Fragment>     
      )  



}

export default App;