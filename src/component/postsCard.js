import React from 'react';
import "../styles/postsCard.css";
const TripPost = ({ trip }) => {
  const { authorName, location, date, imageUrl } = trip;
  const formattedDate = date.slice(0, 10);
  return (
    <div className='Main'>
        
      <div className='Heading'>
     <div className='Helper1'> <div> <img className= "AuthorImg" src='/favicon.ico' alt = {authorName}/></div>
       <div className='LocDate'>
        <div>{location} </div>
       <div>{formattedDate}</div>
       </div>
      </div>
      <div> <span>{authorName}</span></div>
      </div>
      <div className='Body'>
        <img className='Img' src={imageUrl} alt={location} />
      </div>
      <div className='Footer'>

        <div className='likes'>

            <img src='' alt ='like'/>
            <img src='' alt='bookmark'/>
        </div>
      <div className='Reply-box'>
          <input className='Text' type='text' placeholder='Write a reply...' />
          <button type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;