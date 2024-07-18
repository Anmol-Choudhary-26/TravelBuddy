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
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/bookmark/getbookmark`,{
        params: {userId: "6687b8052be27e93d9938d4e"}
    })
    console.log(data)
    return data.data
}

export async function getRecentPosts(){
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/post/recent`)
    console.log(data)
    return data.data
}