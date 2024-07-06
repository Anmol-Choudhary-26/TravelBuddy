import axios from "axios"
import moment from "moment";
export async function getAllPost(values) {
    const data = await axios.get('https://travelbuddy-backend-tuhi.onrender.com/post/allpost');
    console.log(data)
    return data.data;
}

export async function createPost(values) {
    const formattedDate = moment().toISOString(values.date);
    const data = await axios.post('https://travelbuddy-backend-tuhi.onrender.com/post', {
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