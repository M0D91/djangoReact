import React from 'react';
import './homeLayout.css';

const HomeLayout = (props)=>{
    // console.log(props.data)
    return (
        <section 
            className='HomeLayout'>
            {props.children}
            {/* cosas de home */}
        </section>
        
    )
}

export default HomeLayout;