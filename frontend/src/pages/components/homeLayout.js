import React from 'react';
import './homeLayout.css';

const HomeLayout = (props)=>{
    return (
        <section className='Home-layout'>
            {props.children}
            cosas de home
        </section>
    )
}

export default HomeLayout;