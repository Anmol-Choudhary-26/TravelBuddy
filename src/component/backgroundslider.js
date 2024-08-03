import React, { useEffect } from "react";
import "../styles/backgroundslider.css";
import imageSlider from "../utils/data2";
import { useState } from "react";

const BackgroundSlider = () => {


    const [currentState , setCurrentState] = useState(0);
    useEffect(()=>{

        const timer = setTimeout(()=>{
            if(currentState===2){
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState+1)
            }
           

        },5000)
        return ()=> clearTimeout(timer)
    },[currentState])


    const bgImageStyle={
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',

    }

    const goToNext = () => {
        setCurrentState(currentState)
    }
        return(

            <div className="countiner-style">
              <div style={bgImageStyle}>

              </div>

              <div className="carousel-boult">
                {

                    imageSlider.map((imageSlider,currentState)=>(
                         <span key={currentState} onClick={()=> goToNext(currentState)}></span>   
                    ))
                }

              </div>
            </div>
        )
}

export default BackgroundSlider;