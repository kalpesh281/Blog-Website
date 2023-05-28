import React from 'react'
import './settings.css'
import SideBar from '../../Compo/sidebar/SideBar'
function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
        <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
            <label >Profile Picture</label>
            <div className='settingsPP'><img src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg' alt='error'/>
            <label htmlFor='fileInput'>
            <i className="settingsPPIcon fa-solid fa-user-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}/></div>
            <label>UserName</label>
            <input type='text' placeholder='steve'/>
            <label>Email</label>
            <input type='email' placeholder='steve@gmail.com'/>
            <label>Password</label>
            <input type='password'/>
            <button className='settingssubmit'>Update</button>
        </form>
    </div>
      <SideBar/>
    </div>
  )
}

export default Settings
