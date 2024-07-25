import React, {useState} from 'react';
import "../styles/postsCard.css";
import bookmark from "../images/background.png"
import like from '../images/heart.png';
import {createChat} from "../hooks/useChat.js";
import { likePost } from '../hooks/usePost.js';
import {createBookmark} from "../hooks/usePost.js";
const TripPost = ({ trip }) => {
  const [likecount, setLikeCount] = useState(0)
  
  const { authorName, id, location, date, imageUrl } = trip;
 const formattedDate = date.slice(0,10);

 const handleLike = async () => {
  console.log("like clicked")
  const data = await likePost(id)
  console.log(data)
  setLikeCount(data.likesCount)
 }
 const handleBookmark = async () => {
    console.log("bookmarked clicked")
    await createBookmark(id);
 }

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

          <div onClick={handleLike} className='likediv'>
          <p>{likecount}</p>
          <img
           src={like} alt ='like'/>
          </div>
          <div onClick={handleBookmark} className='likediv'>
            <img src={bookmark} alt='bookmark'/>
        </div>
        </div>
      <div className='Reply-box'>
          <input className='Text' type='text' placeholder='Write a reply...' />
          <button onClick={handleSend} type='submit'>Send</button>
        </div>     
      </div>
    </div>
  );
};

export default TripPost;