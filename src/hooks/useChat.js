import axios from "axios"

export async function createChat(values) {
    const user = JSON.parse(localStorage.getItem('userId'))
    const userdata = JSON.parse(localStorage.getItem('userData'))
    const data = await axios.post('https://travelbuddy-backend-gxl9.onrender.com/chat', {
      firstId : user,
      user1Name: userdata.UserName,
      secondId : values.id,
      user2Name : values.username
    });
    console.log(data)
    return data.data
}

export async function getChats(){
 const user = JSON.parse(localStorage.getItem('userId'))
 console.log(user)
 const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/chat/getchats/${user}`)
 console.log(data)
 return data.data
}

export async function getSingleChat(values) {
    const user = JSON.parse(localStorage.getItem('userId'))
    const data = await axios.get('https://travelbuddy-backend-gxl9.onrender.com/chat/singlechat', {
      firstId : user,
      secondId : values
    });
    console.log(data)
    return data.data
}

