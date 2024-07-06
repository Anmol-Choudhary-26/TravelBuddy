
import TripPost from '../component/postsCard';

import '../styles/main.css';
import React , {useState , useEffect} from 'react';
import home from '../images/home.png';
import logo from '../images/temperature.png';
import search from '../images/search (3).png';
import chat from '../images/chat.png'
import bookmark from '../images/bookmark.png';
import profile from '../images/user.png';

import Modal from '../component/modal';
import { getAllPost } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';


function MainPost(){
    const navigate = useNavigate();


const [post, setPost] = useState([])
// const navigate = useNavigate()

useEffect(() => {
    // async function getUser() {
    //     await supabase.auth.getUser().then((value) => { if (value.data?.user) setUser(value.data.user) })
    // }
    // getUser()
    async function getPost(){
        const data =await getAllPost()
        setPost(data)
    }
    getPost()
}, [])

const renderedItems = post.map((items, index) => {
    return (
        <TripPost trip={items} key={index} />
    )
})


    return(
        <div className='Mainpage'>
        
        <div className='mainleft'>

            <img src={logo} alt='logo' className='logo'/>

           <div className='sidebtndiv'>
                <button className='sidebtn' onClick={()=>navigate('/')} ><img src={home} alt='home' className='image' /><h2>Home</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn' onClick={()=>navigate('/search')}> <img src={search} alt='search' className='image'/><h2>Explore</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn' onClick={() => navigate('/chat')}><img src={chat} alt='messages' className='image'/><h2>Messages</h2> </button>
           </div>

           <div className='sidebtndiv'>
                <button className='sidebtn' onClick={() => navigate('/bookmark')}> <img src={bookmark} alt='home' className='image'/><h2>Bookmarks</h2> </button>
           </div>

           <div className='sidebtndiv profile'>
                <button className='sidebtn' onClick={() => navigate('/profile')}> 
                    <img src={profile} alt='home' className='image'/>
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


         <div className='mainrightbottom'>

               
                <Modal />

                

            </div>
         </div>

        </div>

   
        

    )
}


export default MainPost;