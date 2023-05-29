import React,{useState,useEffect} from 'react'
import './Home.css'
import Header from '../Compo/Header/Header'
import Posts from '../Compo/posts/Posts'
import SideBar from '../Compo/sidebar/SideBar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'



function Home() {
  const[posts,setPosts]=useState([]);
  const{search}=useLocation()
  useEffect(()=>{
    const fetchPosts= async ()=>{
      const res=await axios.get("http://localhost:5000/api/posts"+search)
      setPosts(res.data)
      
    }
    fetchPosts()
  },[search])

  return (
    <>
    
    <Header/>
    <div className='home'>
   
    <Posts posts={posts} />
    <SideBar/>
    
    </div>
    </>
  )
}

export default Home
