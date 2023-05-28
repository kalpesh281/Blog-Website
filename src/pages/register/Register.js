import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span>
      <form className='registerForm'>
      <label>Username</label>
        <input type='text' placeholder='Username' className='registerInput'/>
        <label>Email</label>
        <input type='text' placeholder='Email' className='registerInput'/>
        <label>Password</label>
        <input type='password' placeholder='Password'  className='registerInput'/>
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'><Link className='link' to='/login'>Login</Link></button>
    </div>
  )
}

export default Register