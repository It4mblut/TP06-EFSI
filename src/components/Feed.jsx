import { useState, useEffect } from 'react'
import axios from 'axios'
import PostCard from './PostCard.jsx'
import './Feed.css'

function Feed({ abrirPost }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=35')
            .then(respuesta => setPosts(respuesta.data))
    }, [])

    return (
        <section className="feed">
            {posts.map(post => (
                <PostCard key={post.id} post={post} abrirPost={abrirPost} />
            ))}
        </section>
    )
}

export default Feed