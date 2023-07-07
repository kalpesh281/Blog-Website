import React, { useContext } from 'react'
import './top.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


function Topbar() {
  const PF = "http://localhost:5000/images/"
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href="https://www.facebook.com/NewNatureWriters/" target="_blank" rel="noopener noreferrer"><i className="topIcon fa-brands fa-square-facebook"> </i></a>

        <a href="https://www.instagram.com/nature.writers/?hl=en" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://twitter.com/DrS_ayesha" target="_blank" rel="noopener noreferrer"><i className="topIcon fa-brands fa-square-twitter"></i></a>

        <a href="https://in.pinterest.com/chandorejayshri/" target="_blank" rel="noopener noreferrer">  <i className="topIcon fa-brands fa-square-pinterest"></i></a>


      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topItemList'>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li className='topItemList'> <Link className='link' to='/about'>About</Link></li>

          <li className='topItemList'> <Link className='link' to='/write'>Write</Link></li>
          <li className='topItemList' onClick={handleLogout}>{user && "Logout"}</li>

        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <Link to="/settings">
              <img
                className='topImg'
                src={PF + user.profilePic} alt='error' />
            </Link>
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
