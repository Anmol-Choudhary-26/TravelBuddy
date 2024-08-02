import "../styles/search.css";
import TripPost from '../component/searchPost';
import { searchPosts } from '../hooks/usePost';
import React , {useState , useEffect} from 'react';
import Sidebar from "../component/sidebar";


function Search(){
const [post, setPost] = useState([])
const [searchData , setSearchData] = useState({
    caption: '',
    startDate: '',
    endDate: ''
});

const handleChange = (e) => {
    const {name , value} = e.target;
    setSearchData({...searchData , [name] : value});
};

useEffect(() => {
    async function getPost(){
        const data =await searchPosts(searchData);
        setPost(data)
    }
    getPost()
}, [searchData]);


    const renderedItems = post.map((items, index) => {
        return (
            <TripPost trip={items} key={index} />
        )
    })
    return(

        <div className="fullsearch">
          
            <div className="topsearch"> 
            <div className="SideBAR">
             <Sidebar />
             </div>

             
                
             <div className="sEarchbox">
                <select >
                    <option value="">Filter</option>
                    <option value="2">New</option>
                    <option value="3">Top Rated</option>
                    <option value="4">Recent</option>
                </select>
                
               
                    
                <input type='text' name="caption" placeholder="enter place to search..." 
                value={searchData.caption}
                onChange={handleChange}/>
                  </div>  

                 

                  <div className="datestop">
                        <h4>Start Date</h4>
                        <input type="date"  name="startDate" placeholder="start Date" 
                value={searchData.startDate}
                onChange={handleChange} />

                        <h4>End Date</h4>
                        <input type="date"  name="endDate" placeholder="end Date" 
                value={searchData.endDate}
                onChange={handleChange} />


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