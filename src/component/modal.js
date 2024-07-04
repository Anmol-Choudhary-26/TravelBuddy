
// import ReactDom from 'react-dom';
import '../styles/modal.css';
import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
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
                <input type='text' placeholder='Enter Place Name...' />
            </div>

            <div className='textboxx'>
            <div className='headingpost'>
                <h4>Date</h4>
                </div>
                <input type='date' />
            </div>

            <div className='textboxx2'>
            <div className='headingpost'>
                <h4>Caption</h4>
                </div>
                <input type='text' placeholder='write a caption...'/>
            </div>


            <div className='textboxx3'>

               
                <input type='text' />
                <a href='abc'>upload image</a>
            </div>


                <div className='uploadbtn'>
              <button type='submit'>Upload</button>
              </div>


           
          </div>
        </div>
      )}
    </>
  );
}