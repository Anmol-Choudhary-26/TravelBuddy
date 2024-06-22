import React from 'react';
import "../styles/card.css";
const TripPost = ({ trip }) => {
  const { author, location, date, imageUrl } = trip;

  return (
    <div className='main'>
        
      <div className='heading'>
     <div className='helper1'> <div> <img className= "authorImg" src='/favicon.ico' alt = {author}/></div>
       <div className='locDate'>
        <div>{location} </div>
       <div>{date}</div>
       </div>
      </div>
      <div> <span>{author}</span></div>
      </div>
      <div className='body'>
        <img className='img' src={imageUrl} alt={location} />
      </div>
      <div className='footer'>
      <div className='reply-box'>
          <input className='text' type='text' placeholder='Write a reply...' />
          <button type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;