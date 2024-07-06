
// import ReactDom from 'react-dom';
import '../styles/modal.css';
import React, { useState, useEffect } from "react";
import { createPost } from '../hooks/usePost';

export default function Modal() {

  const [user, setUser] = useState({})
  const [post, setPost] = useState({
    imageUrl: 'gfhgfhgfjgfj',
    authorName: 'Akash',
    authorId: "6687b8052be27e93d9938d4e"
  })
  // const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  async function handleSubmit() {
    const data = await createPost(post);
    console.log(data);
    console.log('User created successfully');
    alert("User created successfully");
  }


  useEffect(() => console.log(post));


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
              <input type="file" name="imageUrl" onChange={handleChange} className='uploadimg' />
            </div>


            <div className='uploadbtn'>
              <button onClick={handleSubmit} type='submit'>Upload</button>
            </div>



          </div>
        </div>
      )}
    </>
  );
}