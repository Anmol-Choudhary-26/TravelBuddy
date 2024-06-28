
import TripPost from '../component/postsCard';
import dataAll from '../utils/dataAll';
import '../styles/main.css';
import logo from '../images/b.jpg'
import home from '../images/backk.jpg'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.React_APP_URL,
    process.env.REACT_APP_PUBLIC_KEY
)

function MainPost() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function getUser(){
            await supabase.auth.getUser().then((value) =>{
             if(value.data?.user){
                console.log(value.data.user)
                setUser(value.data.user)
             }   
            })
        }
    },[])

    const renderedItems = dataAll.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )
    })

    return (
        <div className='Mainpage'>

            <div className='mainleft'>

                <img src={logo} alt='logo' className='logo' />

                <div className='sidebtndiv'>
                    <button className='sidebtn'> <img src={home} alt='home' className='image' /><h2>Home</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn'> <img src={home} alt='home' className='image' /><h2>Explore</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn'> <img src={home} alt='home' className='image' /><h2>Messages</h2> </button>
                </div>

                <div className='sidebtndiv'>
                    <button className='sidebtn'> <img src={home} alt='home' className='image' /><h2>Bookmarks</h2> </button>
                </div>

                <div className='sidebtndiv profile'>
                    <button className='sidebtn'>
                        <img src={home} alt='home' className='image' />
                        <h2>Profile</h2>

                    </button>
                </div>
                <div className='Containers'>
                    <h1>TravelBuddy</h1>
                    {renderedItems}

                </div>

                <div className='mainright'>


                </div>

            </div>
        </div>

    )
}


export default MainPost;