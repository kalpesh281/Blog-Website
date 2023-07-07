import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
// import { Link } from 'react-router-dom'

function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(("http://localhost:5000/api/categories"))
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className='sideBar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img style={{ width: "450px", height: "320px" }} src='https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-01.png' alt='error' />
        <p>Hello, my name is Steve, and I am an engineering student. I have a deep love for watching movies, and I consider myself a joyful person. My dream is to explore the world and constantly learn new things.</p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow</span>
        <div className='sidebarSocial'>
          <a href="https://www.facebook.com/NewNatureWriters/" target="_blank" rel="noopener noreferrer"><i className="topIcon fa-brands fa-square-facebook"> </i></a>

          <a href="https://www.instagram.com/nature.writers/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="topIcon fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://twitter.com/DrS_ayesha" target="_blank" rel="noopener noreferrer"><i className="topIcon fa-brands fa-square-twitter"></i></a>

          <a href="https://in.pinterest.com/chandorejayshri/" target="_blank" rel="noopener noreferrer">  <i className="topIcon fa-brands fa-square-pinterest"></i></a>


        </div>
      </div>
    </div>
  )
}

export default SideBar
