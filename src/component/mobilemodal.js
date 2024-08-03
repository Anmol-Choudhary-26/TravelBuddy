import '../styles/mobileModal.css';
import React, { useState} from "react";
import { createPost } from '../hooks/usePost';

export default function MobileModal() {
  const [image, setImage] = useState("")
  const [imageUrl, setData] = useState()
  const [post, setPost] = useState({
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const submitPost = async (e)=>{
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "travelbuddy")
    data.append("cloud_name", "duxuhubym")
 await fetch("https://api.cloudinary.com/v1_1/duxuhubym/image/upload", {
        method:"POST",
        body:data
}).then(res=>res.json()).then(async data=>{
   setData(data)
   
}).catch(err=>{
    console.log(err)
    alert(err)
})
setTimeout(()=>{}, 3000)
const postBody = {
  imageUrl: imageUrl.secure_url,
  authorName: "Akash",
  authorId: "6687b8052be27e93d9938d4e",
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
      <button onClick={toggleModal} className="Btn-Modal">
        Create Post
      </button>

      {modal && (
        <div className="ModaL">
          <div onClick={toggleModal} className="Overlay"></div>
          <div className="Modal-Content">

            <div className='UppR'>
              <h2>Upload Details</h2>

              <button className="close-Modal" onClick={toggleModal}>

                Close
              </button>
            </div>


            <div className='textboxX'>
              <div className='headingposT'>
                <h4>Location</h4>
              </div>
              <input type='text'
                name='location'
                value={post.location}
                onChange={handleChange}
                placeholder='Enter Place Name...' />
            </div>

            <div className='textboxX'>
              <div className='headingposT'>
                <h4>Date</h4>
              </div>
              <input type='date'
                name='date'
                onChange={handleChange}
                value={post.date}
              />
            </div>

            <div className='textboxX2'>
              <div className='headingposT'>
                <h4>Caption</h4>
              </div>
              <input type='text'
                onChange={handleChange}
                name='caption'
                value={post.caption}
                placeholder='write a caption...' />
            </div>


            <div className='textboxX3'>
              <input type="file" name="imageUrl" onChange={(e)=>setImage(e.target.files[0])} className='uploadimG' />
            </div>


            <div className='uploadbtN'>
              <button onClick={() =>submitPost()} type='submit'>Upload</button>
            </div>



          </div>
        </div>
      )}
    </>
  );
}