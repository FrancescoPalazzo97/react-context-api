import React from 'react'

const PostCard = ({ post }) => {

    const { id, title, content, category } = post

    return (
        <div className="col-25">
            <div className="card">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-text">
                    {content}
                    <span className='category'>{category}</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
