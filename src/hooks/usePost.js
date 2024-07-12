import axios from "axios"
export async function getAllPost(values) {
    const data = await axios.get(`https://cors-anywhere.herokuapp.com/https://travelbuddy-backend-gxl9.onrender.com/post/allpost`, 
        {headers: {
            "X-Requested-With": "XMLHttpRequest"
          },} 
    )
    console.log(data)
    return data.data
}

export async function createPost(values) {
    const data = await axios.post(`https://cors-anywhere.herokuapp.com/https://travelbuddy-backend-gxl9.onrender.com/post`, values,
        {headers: {
            "X-Requested-With": "XMLHttpRequest"
          },}  
    )
    console.log(data)
    return data.data
}

export async function searchPosts(values) {
console.log(values.caption, values.startDate, values.endDate)
    const data = await axios.get(`http://localhost:8000/post/search?caption=${values.caption}&startDate=${values.startDate}&endDate=${values.endDate}`,
        
    )
    console.log(data)
    return data.data
}

export async function getbookmarks(userId){
    const data = await axios.get(`http://localhost:8000/bookmarks/${userId}`)
    console.log(data)
    return data.data
}