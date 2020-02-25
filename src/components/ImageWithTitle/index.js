import React from 'react'
import './style.css'
import postData from '../../data/blog.json'

function ImageWithTitle(props) {
    return (
        <div className="imageBox" {...props}>
            <img src={require('../../blogPostImages/'+postData.data[4].blogImage)} alt="mainImage" width="100%" height="100%"/>
            <div className="titleBox">
                <span className="post-tag">fashion</span>
                <h5 className="post-title">An Enjoyful Day At Beach</h5>
            </div>
        </div>
    )
}

export default ImageWithTitle
