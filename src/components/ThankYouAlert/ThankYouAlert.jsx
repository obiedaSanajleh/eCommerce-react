import React from 'react'
import './ThankYouAlert.css'
import pic2 from './../../assets/img/pic2.svg'
function ThankYouAlert() {







  const handelDoneClick = ()=>{
    
    document.querySelector('.thank-you-alert-container').classList.add('ds-none');
  }


  return (
    <div className="thank-you-alert-container ds-none">
        <div className='thank-you-alert-row'>
          <div className='img-part'>
            <img src={pic2} alt="pic2" />
          </div>

        <h2>Thank you </h2>
        <button className='done-btn ' onClick={handelDoneClick}>Done</button>
        </div>
 
    </div>
  )
}

export default ThankYouAlert