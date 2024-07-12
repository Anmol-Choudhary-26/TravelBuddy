import TripPost from '../component/postsCard';
import React , {useState , useEffect} from 'react';
import '../styles/bookmark.css';
import { getbookmarks } from '../hooks/usePost';

function Bookmark(){

    const [post, setPost] = useState([])

    useEffect(() => {
        async function getPost(){
            const data =await getbookmarks()
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

        <div className='COntainers'>
        <h1>Bookmarks</h1>
      <div className='gridbottom'>
      {renderedItems}
      </div>
    </div>

    )
    

}

export default Bookmark;