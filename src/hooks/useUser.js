import axios from "axios"
export async function createUser(values) {
    const data = await axios.post('https://travelbuddy-backend-gxl9.onrender.com/user', 
     {
        email: values.email,
        phoneNumber: values.phoneNumber,
        FullName: values.fullName,
        UserName: values.userName,
        shortBio: values.shortBio,
        Address: values.address
    }, 
    {headers: {
        "X-Requested-With": "XMLHttpRequest"
      },} 
)
    console.log(data)
    return data
}

export async function updateUser(values) {
    const data = await axios.put(`https://travelbuddy-backend-gxl9.onrender.com/user/${"6687b8052be27e93d9938d4e"}`, values,
        {headers: {
            "X-Requested-With": "XMLHttpRequest"
          }, }
    )
    console.log(data)
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
    return data
}

export async function findUserByEmail(email){
    const data = await axios.get(`https://travelbuddy-backend-gxl9.onrender.com/user/email`,
       {
        params: {email : email}
       }
    )
    console.log(data.data)
    if(data){
        localStorage.setItem("userId", JSON.stringify(data.data.id))
        return true
    }
    return false
}