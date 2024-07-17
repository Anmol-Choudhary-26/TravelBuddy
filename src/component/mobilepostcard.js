import React from 'react';
import "../styles/mobilepostsCard.css";
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
    <div className='MaiN'>
        
      <div className='HeadinG'>
     <div className='Helper1'> <div> <img className= "AuthorImG" src='/favicon.ico' alt = {authorName}/></div>
       <div className='LocDatE'>
        <div>{location} </div>
       <div>{formattedDate}</div>
       </div>
      </div>
      <div> <span>{authorName}</span></div>
      </div>
      <div className='BodY'>
        <img className='ImG' src={imageUrl} alt={location} />
      </div>
      <div className='FooteR'>

        <div className='likeS'>

          <div className='likediV'>
            <p>Likes</p>
          <img src={like} alt ='like'/>
          </div>
           
            <img src={bookmark} alt='bookmark'/>
        </div>
      <div className='Reply-boX'>
          <input className='TexT' type='text' placeholder='Write a reply...' />
          <button onClick={() => handleSend()} type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;