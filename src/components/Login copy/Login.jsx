import React, { useState } from 'react'
import LoginImg from './../../assets/img/loginpic.svg'
import { NavLink } from 'react-router'
import ThankYouAlert from '../ThankYouAlert/ThankYouAlert';

import ErrorAlertMessage from '../ErrorAlert/ErrorAlert';
import { auth } from '../../Firebase/firebaseConfig'

import { signInWithEmailAndPassword } from "firebase/auth";


import './Login.css'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleChangePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handleChangeEmail= (e)=>{
    setEmail(e.target.value);
  }












  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("Login successful:", userCredential.user);

      console.log('Login successful');
      document.querySelector('.thank-you-alert-container').classList.remove('ds-none');

      setEmail('');
      setPassword('');
    } catch (error) {
      document.querySelector('.error-alert-container').classList.remove('ds-none');
      console.error('Login failed:', error.message);
    }


  }






  return (
   <>
   <div className='login-part'>
    <div className='login-container'>
    <ThankYouAlert />
    <ErrorAlertMessage />
     <div className='login-row'>
      <div className='img-part'>
       <img src={ LoginImg} alt="Login Illustration" />
      </div>
      <div className='form-part'>
       <h2>Login</h2>
       <form onSubmit={handleSubmit}>
        <input required type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />
        <input required type="password" value={password} placeholder="Password" onChange={handleChangePassword}/>
        <button type="submit">Login</button>
       </form>
       <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
      </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Login