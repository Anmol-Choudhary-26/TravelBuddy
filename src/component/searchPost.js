import React from 'react';
import "../styles/searchPost.css";
import bookmark from "../images/background.png";
import like from '../images/heart.png';
const TripPost = ({ trip }) => {
  const { authorName, location, date, imageUrl } = trip;
 const formattedDate = date.slice(0,10);
  return (
    <div className='MAIN'>


        
      <div className='HEading'>
     <div className='Helper1'> <div> <img className= "AUthorImG" src='/favicon.ico' alt = {authorName}/></div>
       <div className='LOcDate'>
        <div>{location} </div>
       <div>{formattedDate}</div>
       </div>
      </div>
      <div> <span>{authorName}</span></div>
      </div>
      <div className='BOdy'>
        <img className='IMg' src={imageUrl} alt={location} />
      </div>
      <div className='FOoter'>
        <div className='LIKES'>
            <div className='like'>
                <p>Likes</p>
            <img src={like} alt ='like'/>
            </div>
            
        
               
                <img src={bookmark} alt='bookmark'/>
        
            
        </div>
      <div className='REply-box'>
          <input className='TExt' type='text' placeholder='Write a reply...' />
          <button type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;