import React, { useEffect, useState } from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

function SinglePost() {
    const location=useLocation()
 const path=location.pathname.split("/")[2];
const[post,setPost]=useState({})
 useEffect(()=>{
const getPosts=async ()=>{
    const res= await axios.get("http://localhost:5000/api/posts/"+path);
    setPost(res.data)
}
getPosts()
 },[path])

    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img src={post.photo} alt='error' className='sinlgePostImg' />
                )}

                <h1 className='singlePostTitle'>{post.title}
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author :
                    <Link to={`/?user=${post.username}`} className='link'>
                        
                     <b>{post.username}</b>
                    </Link>
                     </span>
                    <span className='singlePostDate'>{(post.createdAt)}</span>
                </div>
                <p className='singlePostDic'>{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost
