import React from 'react'
import PostsList from './PostsList'
import Alert from './Alert'

const PostsPage = () => {
    return (
        <main>
            <div className="container">
                <Alert />
                <PostsList />
            </div>
        </main>
    )
}

export default PostsPage
