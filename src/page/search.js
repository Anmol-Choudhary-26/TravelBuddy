import "../styles/search.css";
import TripPost from '../component/searchPost';
import { getAllPost } from '../hooks/usePost';
import React , {useState , useEffect} from 'react';

function Search(){


    // const [user, setUser] = useState({})
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

        <div className="fullsearch">
           
            <div className="topsearch">

                <select >
                    <option value="">Filter</option>
                    <option value="1">Popular</option>
                    <option value="2">New</option>
                    <option value="3">Top Rated</option>
                    <option value="4">Recent</option>
                </select>
                
                <div className="searchbox">
                    
                <input type="text" placeholder="Search for places"/>
                  </div>  

                  <div className="datestop">
                        <h4>Start Date</h4>
                        <input type="date" />

                        <h4>End Date</h4>
                        <input type="date" />
                  </div>
            
            </div>


            <div >

            <div className="searchbottom">
            {renderedItems}


            </div>
           

            </div>


        </div>

    )


}

export default Search;