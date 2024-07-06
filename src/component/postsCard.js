import React from 'react';
import "../styles/postsCard.css";
import bookmark from "../images/background.png"
import like from '../images/heart.png';
import {createChat} from "../hooks/useChat.js";
const TripPost = ({ trip }) => {
  const { authorName, id, location, date, imageUrl } = trip;
 const formattedDate = date.slice(0,10);
 const handleSend = async () => {
  const data = await createChat(id)
  console.log(data)
 }
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

          <div className='likediv'>
            <p>Likes</p>
          <img src={like} alt ='like'/>
          </div>
           
            <img src={bookmark} alt='bookmark'/>
        </div>
      <div className='Reply-box'>
          <input className='Text' type='text' placeholder='Write a reply...' />
          <button onClick={() => handleSend()} type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;