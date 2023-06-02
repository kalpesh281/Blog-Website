import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState(false)
  const handleSubmit=async(e)=> {
    e.preventDefault();
    setError(false)
    try {
      // const res=await axios.post("http://localhost:5000/api/auth/register",{
        const res=await axios.post("https://blog-app-backend-vuwf.onrender.com/register",{
       username,email,password
    });
    res.data && window.location.replace("/login");
    
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'
      onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input type='text'
         placeholder='Username' 
        className='registerInput' 
      onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input type='text'
         placeholder='Email'
          className='registerInput'
          onChange={e=>setEmail(e.target.value)}
           />
        <label>Password</label>
        <input type='password' placeholder='Password' className='registerInput' 
          onChange={e=>setPassword(e.target.value)}
        />
        <button className='registerButton' type='submit'>Register</button>
      </form>
      <button className='registerLoginButton'><Link className='link' to='/login'>Login</Link></button>
      {error &&<span>Something went wrong!</span> }
    </div>
  )
}

export default Register