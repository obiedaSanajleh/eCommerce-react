import React, { useState } from 'react'
import SignUpImg from './../../assets/img/sign-up-pic.svg'

import ThankYouAlert from '../ThankYouAlert/ThankYouAlert';

import ErrorAlertMessage from '../ErrorAlert/ErrorAlert';
import { auth } from '../../Firebase/firebaseConfig'

import { createUserWithEmailAndPassword} from "firebase/auth";


import './SignUp.css'

import { useNavigate } from'react-router';

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState(""); 
   let navigate = useNavigate();
FirstName
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
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      console.log("Sign up successful:", userCredential.user);

      console.log('Sign up successful');
      document.querySelector('.thank-you-alert-container').classList.remove('ds-none');

      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');

    } catch (error) {
      document.querySelector('.error-alert-container').classList.remove('ds-none');
      console.error('Login failed:', error.message);
    }


  }
  const handleFirstNameChange = (e)=>{
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e)=>{
    setLastName(e.target.value);
  }



  const handleBackBtn = ()=>{
   

    navigate(-1); 
    
  }



  return (
   <>
   <div className='sign-up-part'>
    <div className='sign-up-container'>
    <ThankYouAlert />
    <ErrorAlertMessage />
     <div className='sign-up-row'>
      <div className='img-part'>
       <img src={SignUpImg} alt="sign-up Illustration" />
      </div>
      <div className='form-part'>
       <h2>Sign up</h2>
       <form onSubmit={handleSubmit}>
       <input required type="text" value={FirstName}  placeholder="First Name" onChange={handleFirstNameChange} />
       <input required type="text" value={LastName}  placeholder="Last Name" onChange={handleLastNameChange}  />

        <input required type="email" value={email} placeholder="Email" onChange={handleChangeEmail} />
        <input required type="password" value={password} placeholder="Password" onChange={handleChangePassword}/>
        <button type="submit">Sign up</button>
       </form>
       <button onClick={handleBackBtn}>Back</button>
     
      </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default SignUp