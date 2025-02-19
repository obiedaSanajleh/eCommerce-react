import React from 'react'
import './ErrorAlert.css'
import pic3 from './../../assets/img/pic3.svg'
function ErrorAlert() {







  const handelDoneClick = ()=>{
    
    document.querySelector('.error-alert-container').classList.add('ds-none');
  }


  return (
    <div className="error-alert-container ds-none">
        <div className='error-alert-row'>
          <div className='img-part'>
            <img src={pic3} alt="pic3" />
          </div>

        <h2>Error </h2>
        <button className='done-btn ' onClick={handelDoneClick}>Done</button>
        </div>
 
    </div>
  )
}

export default ErrorAlert