import React from 'react';
import './postListLayout.css';

const Post = (props) => {
    // console.log(props.id);
    return (
        <div 
            className='Post'
            onClick= {props.handleClick}
            id={props.id}
            // ref = {props.setRef}
            >

            <h2 className='Post-title'
                // onClick = {props.h2HandleClick}
                // id = {props.id}
            >
            {props.title}
            </h2>

            <p className='Post-author'
                // onClick = {props.pHandleClick}
                // id={props.id}
            >
                {props.content}
            </p>
            
        </div>
       
    )
}

export default Post;