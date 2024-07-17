import TripPost from '../component/mobilepostcard';
import '../styles/mobileMain.css';
import React, { useState, useEffect } from 'react';
import home from '../images/home.png';
import logo from '../images/temperature.png';
import search from '../images/search (3).png';
import chat from '../images/chat.png'
import bookmark from '../images/bookmark.png';
import profile from '../images/user.png';
import MobileModal from '../component/mobilemodal';
import { getAllPost, getRecentPosts } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../component/sidebar';



function MainPost() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    const [post, setPost] = useState([])

    useEffect(() => {
        
        if(filter ===''){
            async function getPost() {
                const data = await getAllPost()
                setPost(data)
            }
            getPost()

        }
     else if(filter === 'popular'){
        async function getPost() {
            const data = await getAllPost()
            setPost(data)
        }
        getPost()
     }
     else if(filter === 'recent'){
        async function getPost() {
            const data = await getRecentPosts()
            setPost(data)
        }
        getPost()
     }
    }, [filter])

    const renderedItems = post.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )
    })


    return (
        <div className='Mainpage'>
               
             

            <div className='COntainers'>
                
              <div className='mainsidebar'>
              <Sidebar />

              <div className='filteR'>

                    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="">Filter</option>
                        <option  value="popular">Popular</option>
                        <option  value="recent">Recent</option>
                    </select>
                </div>

                <div className='Mainrightbottom'>

                <MobileModal /> 
                </div>
<div className='Theme'>
                    <button className='Themebtn'>
                        <img src={home} alt='home' className='imAge' />
                        <h3>Light mode</h3>
                    </button>
                </div>
              </div>

                <h1>TravelBuddy</h1>
                {renderedItems}

            </div>

            
        </div>




    )
}


export default MainPost;