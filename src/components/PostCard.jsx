import React from 'react'

const PostCard = ({ post }) => {

    const { id, title, content, category } = post

    return (
        <div className="col-25">
            <div className="card">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-text">
                    <p>{content}</p>
                    <span className='category'>{category}</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
