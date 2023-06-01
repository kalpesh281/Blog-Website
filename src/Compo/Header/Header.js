import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Blog</span>
            <span className='headerTitleLg'>Website</span>
        </div>
        <img className='headerImg' src='https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg' alt='error'/>
    </div>
  )
}

export default Header
