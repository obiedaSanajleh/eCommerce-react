import React, { useRef, useState } from 'react'
import './../ContactUs/ContactUs.css'
import  pic from './../../assets/img/pic1.svg';
import ThankYouAlert from './../ThankYouAlert/ThankYouAlert';

import ErrorAlertMessage from './../ErrorAlert/ErrorAlert';

function ContactUs() {



    const nameInputRef = useRef(null);
    const messageInputRef = useRef(null);
    const emailInputRef = useRef(null);

     

    const handelSubmit= (e)=>{
        e.preventDefault();
        
    
        if(nameInputRef.current.value == "" || emailInputRef.current.value == ""|| messageInputRef.current.value=="") {
            document.querySelector('.error-alert-container').classList.remove('ds-none');

         
        }
        else{
           
            document.querySelector('.thank-you-alert-container').classList.remove('ds-none');
            nameInputRef.current.value = "";
            emailInputRef.current.value = "";
            messageInputRef.current.value = "";
        }


    }



  return (
        <>

            <div className='contact-us'>
                <div className='container-contact-us'>
                <ThankYouAlert />
                <ErrorAlertMessage />
                        <div className='row-contact-us'>
                     
                        
                                <div className='contact-form'>
                                    <div className='pic-part'>
                                    <img src={pic} alt="pic" />
                                    </div>

                                        <div className='text-part'>
                                        <h2>Contact Us</h2>
                                        <form onSubmit={handelSubmit} > 
                                                <input ref={nameInputRef} className='input-your-name' type='text' placeholder='Your Name' />
                                                <input ref={emailInputRef} className='input-email' type='email' placeholder='Your Email' />
                                                <textarea ref={messageInputRef} className='input-password' placeholder='Your Message' rows='5'></textarea>
                                                <button className='send-message' type='submit'>Send Message</button>
                                        </form>
                                        </div>
                                    </div>
                        </div>
                </div>  
            </div>
   
   
        </>
  )
}

export default ContactUs