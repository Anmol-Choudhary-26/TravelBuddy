import axios from "axios"
export async function createUser(values) {
    const data = await axios.post('https://travelbuddy-backend-tuhi.onrender.com/user', 
     {
        email: values.email,
        phoneNumber: values.phoneNumber,
        FullName: values.fullName,
        UserName: values.userName,
        shortBio: values.shortBio,
        Address: values.address
    })
    console.log(data)
    return data
}

export async function updateUser(values) {
    const data = await axios.put(`https://travelbuddy-backend-tuhi.onrender.com/user/${"6687b8052be27e93d9938d4e"}`, values)
    console.log(data)
    return data
}