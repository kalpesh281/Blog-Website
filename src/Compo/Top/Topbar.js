import React, { useContext } from 'react'
import './top.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


function Topbar() {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
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
          <li className='topItemList' onClick={handleLogout}>{user && "Logout"}</li>

        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <img
              className='topImg'
              src={user.profilePic} alt='error' />
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
