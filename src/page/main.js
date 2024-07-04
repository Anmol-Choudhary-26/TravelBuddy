
import TripPost from '../component/postsCard';
import dataAll from '../utils/dataAll';
import '../styles/main.css';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import home from '../images/homeicon.jpeg';
import logo from '../images/temperature.png';

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    "https://tpkszvmuasfiyaloquii.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa3N6dm11YXNmaXlhbG9xdWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NzY5NTIsImV4cCI6MjAzNTE1Mjk1Mn0.2IrSRNr1j2q-3tXMwqHkpyfg5PMG8Wjyyb_1-cOcV4s"
)
function MainPost() {
    const [user, setUser] = useState({})
    // const navigate = useNavigate()

    useEffect(() => {
        async function getUser() {
            await supabase.auth.getUser().then((value) => { if (value.data?.user) setUser(value.data.user) })
        }
        getUser()
    }, [])

    const renderedItems = dataAll.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )
    })

    return(
        <div className='Mainpage'>
        
        <div className='mainleft'>

            <img src={logo} alt='logo' className='logo'/>

           <div className='sidebtndiv'>
                <button className='sidebtn'> <img src={home} alt='home' className='image'/><h2>Home</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn'> <img src={home} alt='home' className='image'/><h2>Explore</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn'> <img src={home} alt='home' className='image'/><h2>Messages</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn'> <img src={home} alt='home' className='image'/><h2>Bookmarks</h2> </button>
           </div>

           <div className='sidebtndiv profile'>
                <button className='sidebtn'> 
                    <img src={home} alt='home' className='image'/>
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
                    <img src={home} alt='home' className='image'/>
                    <h3>Light mode</h3> 
                </button>
            </div>
         <div className='filter'>

                <select>
                    <option value="">Filter</option>
                    <option value="1">Popular</option>
                    <option value="2">New</option>
                    <option value="3">Top Rated</option>
                    <option value="4">Recent</option>
                </select>
         </div>

        </div>

        </div>
        
    )
}


export default MainPost;