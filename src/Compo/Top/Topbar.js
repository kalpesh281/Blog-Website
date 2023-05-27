import React from 'react'
import './top.css'



function Topbar() {
  return (
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
      <ul className='topList'>
        <li className='topItemList'>Home</li>
        <li className='topItemList'>About</li>
        <li className='topItemList'>Contact</li>
        <li className='topItemList'>Write</li>
        <li className='topItemList'>Logout</li>

      </ul>
      </div>
      <div className='topRight'>
        <img 
        className='topImg'
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='error' />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

export default Topbar
