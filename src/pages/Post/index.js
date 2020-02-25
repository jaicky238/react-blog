import React from 'react'
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';

function Post(props) {
    return (
       <section className="container">
           <BlogPost {...props}/>
           <SideBar/>
        </section>
    )
}

export default Post
