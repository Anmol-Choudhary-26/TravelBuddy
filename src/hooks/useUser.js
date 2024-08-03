import axios from "axios"
export async function createUser(values) {
<<<<<<< HEAD
    const data = await axios.post('https://cors-anywhere.herokuapp.com/https://travelbuddy-backend-gxl9.onrender.com/user', 
     {
        email: values.email,
        phoneNumber: values.phoneNumber,
        FullName: values.fullName,
        UserName: values.userName,
        shortBio: values.shortBio,
        Address: values.address
=======
    console.log(values)
    const data = await axios.post('https://travelbuddy-backend-gxl9.onrender.com/user', 
     {
        email: values.email,
        phoneNumber: values.phoneNumber,
        userName: values.username,
        FullName: values.FullName,
        emergencyContact: values.emergencyContact,
        UserName: values.userName,
        shortBio: values.shortBio,
        Address: values.Address,
        profilePic: values.profilePic
>>>>>>> 45a69433059528a60db942b037fec55041a9aa41
    }, 
    {headers: {
        "X-Requested-With": "XMLHttpRequest"
      },} 
)
    console.log(data)
<<<<<<< HEAD
=======
    localStorage.setItem("userId", JSON.stringify(data.data.id))
    localStorage.setItem("userData", JSON.stringify(data.data))
>>>>>>> 45a69433059528a60db942b037fec55041a9aa41
    return data
}

export async function updateUser(values) {
<<<<<<< HEAD
    const data = await axios.put(`https://cors-anywhere.herokuapp.com/https://travelbuddy-backend-gxl9.onrender.com/user/${"6687b8052be27e93d9938d4e"}`, values,
=======
    const user = JSON.parse(localStorage.getItem("userId"))
    const data = await axios.put(`https://travelbuddy-backend-gxl9.onrender.com/user/${user}`, values,
>>>>>>> 45a69433059528a60db942b037fec55041a9aa41
        {headers: {
            "X-Requested-With": "XMLHttpRequest"
          }, }
    )
    console.log(data)
<<<<<<< HEAD
    return data
}
=======
    localStorage.setItem("userData", JSON.stringify(data.data))
    return data
}

export async function getUser(UserId){
    console.log(UserId)
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/user`,
       {
        params: {id : UserId}
       }
    )
    console.log(data)
    localStorage.setItem("userData", JSON.stringify(data.data))
    return data.data
}

export async function findUserByEmail(email){
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/user/email`,
       {
        params: {email : email}
       }
    )
    console.log(data.data)
    if(data.data){
        localStorage.setItem("userId", JSON.stringify(data.data.id))
        localStorage.setItem("userData", JSON.stringify(data.data))
        return true
    }
    return false
}
>>>>>>> 45a69433059528a60db942b037fec55041a9aa41
