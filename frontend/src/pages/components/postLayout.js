import React from 'react';
import './postLayout.css';

const Post = (props) => {
    return (
        <div className='Post'>
            <h2 className='Post-title'>{props.title}</h2>
            <p className='Post-author'>{props.content}</p>
            
        </div>
       
    )
}

export default Post;