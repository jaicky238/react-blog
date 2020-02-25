import React from 'react'
import './style.css'
import Card from '../HOC/Card'
import postDat from '../../data/blog.json'
import {Link} from 'react-router-dom'

function HomeBlogPost() {
    return (
        <div className="HomeBlogPost">
            {
                postDat.data.map(post =>{
                    return(
                        <Card key={post.id}style={{marginBottom:"50px"}}>
                            <div className="blogPost">
                                <img src={require('../../blogPostImages/'+post.blogImage)} alt="postImage"/>
                            </div>
                            <div className="postTitle">
                                <span className="post-cat">{post.blogCategory}</span>
                                <h2 className="post-title" >{post.blogTitle}</h2>
                                <span className="postedOn">Posted on</span> <span className="postedOn">{post.postedOn}</span> <span className="postedOn">By</span> <span className="post-author">{post.author}</span>
                                 <p className="post-summary">{post.blogText}</p>
                                <Link to={`/post/${post.id}`}className="read-more">Read More</Link>
                            </div>
                        </Card>
                    )
                })
            }
            
        </div>
    )
}

export default HomeBlogPost
