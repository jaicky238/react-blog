import React, {useEffect,useState} from 'react'
import blogData from '../../data/blog.json'
import Card from '../HOC/Card'
import {Link} from 'react-router-dom';
import './style.css'

function SideBar() {

    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        const posts = blogData.data;
        setPosts(posts)

    })

    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom:"20px",padding:"10px",boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>About US</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../assets/profile.jpg')} alt="profile" className="profileImage"/>
                    <div className="cardBody">
                        <p className="personalBio">This is Nitish Kumar specilation in Front-End Developer </p>
                    </div>
                </div>
            </Card>

            <Card style={{marginBottom:"20px",padding:"10px",boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{marginBottom:"20px",padding:"10px",boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                {
                 posts.map(post =>{
                    return (
                        <Link to={`/post/${post.id}`}>
                        <div className="recentPost">
                            <h3>{post.blogTitle}</h3>
                            <span>{post.postedOn}</span>
                        </div>
                        </Link>
                    );

                 })   
                }

            </Card>
        </div>
    )
}

export default SideBar
