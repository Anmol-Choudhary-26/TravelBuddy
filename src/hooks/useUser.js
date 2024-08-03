import axios from "axios"
export async function createUser(values) {

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

    }, 
    {headers: {
        "X-Requested-With": "XMLHttpRequest"
      },} 
)
    console.log(data)

    localStorage.setItem("userId", JSON.stringify(data.data.id))
    localStorage.setItem("userData", JSON.stringify(data.data))

    return data
}

export async function updateUser(values) {

    const user = JSON.parse(localStorage.getItem("userId"))
    const data = await axios.put(`https://travelbuddy-backend-gxl9.onrender.com/user/${user}`, values,

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

