import axios from "axios"
import moment from "moment";
export async function getAllPost(values) {
    const data = await axios.get('https://https://travelbuddy-backend-gxl9.onrender.com/post/allpost');
    console.log(data)
    return data.data;
}

export async function createPost(values) {
    const formattedDate = moment().toISOString(values.date);
    const data = await axios.post('https://https://travelbuddy-backend-gxl9.onrender.com/post', {
        imageUrl: values.imageUrl,
        authorName: values.authorName,
        authorId: values.authorId,
        location: values.location,
        caption: values.caption,
        date: formattedDate,
        
    });
    console.log(data)
    return data.data
}