import React from 'react'
import PostsList from './PostsList'
import Alert from './Alert'
import Button from './Button'

const PostsPage = () => {
    return (
        <main>
            <div className="container">
                <Alert />
                <Button />
                <PostsList />
            </div>
        </main>
    )
}

export default PostsPage
