import axios from "axios"
export async function getAllChatRooms(values) {
    const data = await axios.get('https://travelbuddy-backend-gxl9.onrender.com/chat/rooms');
    console.log(data)
    return data.data;
}

export async function createChat(values) {
    const user = JSON.parse(localStorage.getItem('userId'))
    const data = await axios.post('https://travelbuddy-backend-gxl9.onrender.com/chat', {
        users: [user, values]
    },{headers: {
        "X-Requested-With": "XMLHttpRequest"
      }, });
    console.log(data)
    return data.data
}