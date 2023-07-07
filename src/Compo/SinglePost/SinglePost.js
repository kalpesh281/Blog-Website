import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';

function SinglePost() {
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPosts()
    }, [path])
    const handleDelete = async () => {
        try {
            await axios.delete("http://localhost:5000/api/posts/" + post._id, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };


    const handleUpdate = async () => {
        try {
            await axios.put("http://localhost:5000/api/posts/" + post._id, {
                username: user.username,
                title,
                desc
            });
            window.location.reload();
        } catch (err) { }
    }
    // console.log(post.user)
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img src={PF + post.photo} alt='error' className='sinlgePostImg' />
                )}
                {
                    updateMode ? <input type="text" value={title} className='singlePostTitleInput'
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    /> : (

                        <h1 className='singlePostTitle'>
                            {post.title}
                            {post.username === user?.username && (
                                <div className='singlePostEdit'>
                                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete} ></i>
                                </div>
                            )}
                        </h1>
                    )}
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author :
                        <Link to={`/?user=${post.username}`} className='link'>

                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{(post.createdAt)}</span>
                </div>
                {updateMode ? <textarea className='singlePostDicInput' value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
                    <p className='singlePostDic'>{post.desc}</p>
                )}
                {updateMode && (
                    <button className='singlePostButton' onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SinglePost
