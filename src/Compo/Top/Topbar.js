import React from 'react'
import './top.css'
import { Link } from 'react-router-dom'


function Topbar() {
  const user=false
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
        <li className='topItemList'>
          <Link className='link' to='/'>Home</Link>
        </li>
        <li className='topItemList'> <Link className='link' to='/'>About</Link></li>
        <li className='topItemList'> <Link className='link' to='/'>Contact</Link></li>
        <li className='topItemList'> <Link className='link' to='/write'>Write</Link></li>
        <li className='topItemList'>{user && "Logout"}</li>

      </ul>
      </div>
      <div className='topRight'>
      {
        user ? (
          <img 
        className='topImg'
        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='error' />
        ) : (
          <>
          <ul className='topList' >
          <li className='topListItem'>
            <Link className='link' to='/login'>Login</Link>
            </li>

            </ul>
          </>
        )
      }
       
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

export default Topbar
