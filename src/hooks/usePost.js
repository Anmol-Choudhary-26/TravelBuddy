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