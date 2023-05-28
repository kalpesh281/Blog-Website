import React from 'react'
import './Write.css'

function Write() {
  return (
    <div className='write'>
    <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' alt='error' className='writeImg' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
        <label htmlFor='fileInput'>
        <i className="writeIcon fa-solid fa-plus"></i>
        </label>
            <input type='file' id='fileInput'style={{display:"none"}} />
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
            <textarea placeholder='Tell Your Story...' className='writeInput writeText'/>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
