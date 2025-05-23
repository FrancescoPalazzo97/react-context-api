import React from 'react'
import { useContext } from 'react'
import PostsContext from '../contexts/PostsContext'
import PostCard from './PostCard'

const PostsList = () => {

    const posts = useContext(PostsContext);

    return (
        <div className="row">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostsList
