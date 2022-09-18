import {useState , useEffect} from 'react'
import axios from 'axios'

function FetchPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }, [])

  return (
    <ul>
        {
            posts.map( post => {
                <li key={post.id} >{post.title}</li>
            })
        }
    </ul>
  )
}

export default FetchPosts