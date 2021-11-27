import axios from "axios"

async function getData(userId = Number) {
    const user = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return { "user": user.data, "post": post.data }
}

export default getData;