import React from 'react'
// import  Card from '../../components/HOC/Card'

import postData from '../../data/blog.json'
import './style.css'
import ImageWithTitle from '../../components/ImageWithTitle/index.js';
import HomeBlogPost from '../../components/HomeBlogPost/index.js';
import SideBar from '../../components/SideBar/index.js';

function Home() {
    console.log(postData);
    return (
        <div>
            <div className="homeMainImageContainer">
                <div className="left-part">
                    <ImageWithTitle  style={{height:"456px",marginBottom:"3px"}}/>  
                </div>

                <div className="right-part">
                    <ImageWithTitle style={{height:"150px",marginBottom:"3px"}}/>
                    <ImageWithTitle style={{height:"150px",marginBottom:"3px"}}/>
                    <ImageWithTitle style={{height:"150px"}}/>
                </div>
            </div>
            <div className="homePostContainer">
                <HomeBlogPost/>
                <SideBar/>
            </div>

        </div>
    )
}

export default Home
