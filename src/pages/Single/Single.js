import React from 'react'
import './Single.css'
import SideBar from '../../Compo/sidebar/SideBar'
import SinglePost from '../../Compo/SinglePost/SinglePost'

function Single() {
  return (
    <div className='single'>
     <SinglePost/>
      <SideBar/>
    </div>
  )
}

export default Single
