import React from 'react'
import './Home.css'
import Header from '../Compo/Header/Header'
import Posts from '../Compo/posts/Posts'
import SideBar from '../Compo/sidebar/SideBar'


function Home() {
  return (
    <>
    
    <Header/>
    <div className='home'>
   
    <Posts/>
    <SideBar/>
    
    </div>
    </>
  )
}

export default Home
