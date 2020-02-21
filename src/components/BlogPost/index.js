import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../HOC/Card'
import blogData from '../../data/blog.json'

function BlogPost(props) {

    const[post,setPost] = useState({
        id: "",
        blogCategory:"" ,
        blogTitle :"",
        slug: "",
        postedOn:"" ,
        author: "",
        blogImage:"" ,
        blogText:"" 
     });
    const postId = parseInt(props.match.params.postId);

    useEffect(()=>{
        const matchedPost = blogData.data.find(post => post.id===postId);
        setPost(matchedPost)

    },[post,postId])

    if(post.blogImage=="") return null;


    return (
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                        <span className="blogCat">{post.blogCategory}</span>
                        <h5 className="postTitle">{post.blogTitle}</h5>
                        <span className="postedBy">{post.author}</span>
                    </div>  
                    <div className="postImage">
                        <img src={require('../../blogPostImages/'+post.blogImage)} alt="postImage" />
                    </div>

                    <div className="postContent">
                        <h3>{post.blogTitle}</h3>
                        <p>{post.blogText}</p>
                    </div>
                </Card>
            </div>
    )
}

export default BlogPost
