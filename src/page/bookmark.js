import TripPost from '../component/postsCard';
import React , {useState , useEffect} from 'react';
import '../styles/bookmark.css';
import { getAllPost } from '../hooks/usePost';



function Bookmark(){

    const [post, setPost] = useState([])

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

        <div className='Containers'>
        <h1>Bookmarks</h1>
      {renderedItems}
     
    </div>

    )
    

}

export default Bookmark;