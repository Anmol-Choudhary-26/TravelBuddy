import TripPost from '../component/postsCard';
import '../styles/main.css';
import React, { useState, useEffect } from 'react';
import home from '../images/home.png';
import logo from '../images/temperature.png';
import search from '../images/search (3).png';
import chat from '../images/chat.png'
import bookmark from '../images/bookmark.png';
import profile from '../images/user.png';
import Modal from '../component/modal';
import { getAllPost, getRecentPosts } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';
import supabase from '../component/supabase.js';
import { findUserByEmail } from '../hooks/useUser.js';



function MainPost() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    const [post, setPost] = useState([])


    supabase.auth.onAuthStateChange(async (event) => {
        console.log(event)
        if (event === "SIGNED_OUT") {
            navigate("/login")
        }
    
    })

    useEffect(() => {

        if(!localStorage.getItem('userData') || localStorage.getItem('userData') === null || localStorage.getItem('userData') === undefined ) {
            async function getUser() {
                await supabase.auth.getUser().then(async (value) => {
                   console.log(value.data)
                   if(!value.data.user){
                       navigate('/login')
                   }
                    const email = value?.data?.user?.email;
                    localStorage.setItem("email", email);
                    const user = await findUserByEmail(email)
                    if(!user){
                     navigate('/createuser')
                   }
                   })
            }
            getUser()
        }
        
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
               
            <div className='mainleft'>

             
              
                <img src={logo} alt='logo' className='logo' />
           
                <div className='sidebtndiv'>
                    <button className='sidebtn' onClick={() => navigate('/')} ><img src={home} alt='home' className='image' /><h2>Home</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn' onClick={() => navigate('/searchpost')}> <img src={search} alt='search' className='image' /><h2>Explore</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn' onClick={() => navigate('/msg')}><img src={chat} alt='messages' className='image' /><h2>Messages</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn' onClick={() => navigate('/postbookmark')}> <img src={bookmark} alt='home' className='image' /><h2>Bookmarks</h2> </button>
                </div>

                <div className='sidebtndiv profile'>
                    <button className='sidebtn' onClick={() => navigate('/profile')}>
                        <img src={profile} alt='home' className='image' />
                        <h2>Profile</h2>

                    </button>
                </div>



            </div>

            <div className='Containers'>
                <h1>TravelBuddy</h1>
                {renderedItems}

            </div>

            <div className='mainright'>

                

                <div className='theme'>
                    <button className='themebtn'>
                        <img src={home} alt='home' className='image' />
                        <h3>Light mode</h3>
                    </button>
                </div>
                <div className='filter'>

                    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="">Filter</option>
                        <option  value="popular">Popular</option>
                        <option  value="recent">Recent</option>
                    </select>
                </div>


                <div className='mainrightbottom'>


                    <Modal />



                </div>
            </div>

        </div>




    )
}


export default MainPost;