import '../styles/modal.css';
import React, { useState} from "react";
import { createPost } from '../hooks/usePost';
import axios from 'axios';

export default function Modal() {
  const [image, setImage] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [post, setPost] = useState({
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const submitPost = async (e)=>{
    console.log(image)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "travelbuddy")
    data.append("cloud_name", "duxuhubym")
 await axios.post("https://api.cloudinary.com/v1_1/duxuhubym/image/upload", {
       data
}).then(res=>res.json()).then(async data=>{
  console.log(data);
   setImageUrl(data.secure_url);
   
}).catch(err=>{
    console.log(err)
    alert(err)
})

const postBody = {
  imageUrl: imageUrl.secure_url,
  authorName: JSON.parse(localStorage.getItem("userData")).UserName,
  authorId: JSON.parse(localStorage.getItem("userId")),
  caption: post.caption,
  date : `${post.date}T00:00:00z`,
  location: post.location,
  
}
  await createPost(postBody);
 alert("post created successfully!!")
  }



  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create Post
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <div className='uppr'>
              <h2>Upload Details</h2>

              <button className="close-modal" onClick={toggleModal}>

                Close
              </button>
            </div>


            <div className='textboxx'>
              <div className='headingpost'>
                <h4>Location</h4>
              </div>
              <input type='text'
                name='location'
                value={post.location}
                onChange={handleChange}
                placeholder='Enter Place Name...' />
            </div>

            <div className='textboxx'>
              <div className='headingpost'>
                <h4>Date</h4>
              </div>
              <input type='date'
                name='date'
                onChange={handleChange}
                value={post.date}
              />
            </div>

            <div className='textboxx2'>
              <div className='headingpost'>
                <h4>Caption</h4>
              </div>
              <input type='text'
                onChange={handleChange}
                name='caption'
                value={post.caption}
                placeholder='write a caption...' />
            </div>


            <div className='textboxx3'>
              <input type="file" name="imageUrl" onChange={(e)=>setImage(e.target.files[0])} className='uploadimg' />
            </div>


            <div className='uploadbtn'>
              <button onClick={() =>submitPost()} type='submit'>Upload</button>
            </div>



          </div>
        </div>
      )}
    </>
  );
}