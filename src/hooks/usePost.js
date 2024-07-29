import axios from "axios"
export async function getAllPost(values) {
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/post/allpost`)
    console.log(data)
    return data.data
}

export async function createPost(values) {
    const data = await axios.post(`https://travelbuddy-backend-gxl9.onrender.com/post`, values,
         
    )
    console.log(data)
    return data.data
}

export async function searchPosts(values) {
console.log(values.caption, values.startDate, values.endDate)
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/post/search?caption=${values.caption}&startDate=${values.startDate}&endDate=${values.endDate}`,
        
    )
    console.log(data)
    return data.data
}

export async function getbookmarks(userId){
    const user = JSON.parse(localStorage.getItem('userId'))
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/bookmark/getbookmark`,{
        params: {userId: user}
    })
    console.log(data)
    return data.data
}

export async function getRecentPosts(){
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/post/recent`)
    console.log(data)
    return data.data
}

export async function likePost(postId){

    const user = JSON.parse(localStorage.getItem('userId'))
    const data = await axios.post(`https://travelbuddy-backend-gxl9.onrender.com/post/like/`,
         {
                postId,
                userId: user
            }
        
    )
    return data.data
}

export async function createBookmark(postId){
    const user = JSON.parse(localStorage.getItem('userId'))
    console.log(user, postId)
    const data = await axios.post(`https://travelbuddy-backend-gxl9.onrender.com/bookmark/`,
        {
            
                 postId,
                userId: user
            
        }
    )
    return data.data
}