
import TripPost from '../component/postsCard';
import dataAll from '../utils/dataAll';
import '../styles/main.css';
import React from'react';

function MainPost(){
const renderedItems = dataAll.map((items, index) => {
    return (
        <TripPost trip={items} key={index} />
    )
})

    return(

        
        <div className='Containers'>
            <h1>TravelBuddy</h1>
          {renderedItems}
         
        </div>
        

    )
}


export default MainPost;