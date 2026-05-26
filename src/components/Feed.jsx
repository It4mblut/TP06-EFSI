import { useState, useEffect } from 'react'
import axios from 'axios'
import PostCard from './PostCard.jsx'
import './Feed.css'

function Feed({ abrirPost }) {
    const [posts, setPosts] = useState([])

 useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=120', {
            headers: {
                'x-api-key': 'live_zzCGWw1DQQ9xjtLrQ6zLi3aNLseLeXTBVbvB8jDk50ucSqF6lxGHTaAE1bKVGnYb'
            }
        })
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