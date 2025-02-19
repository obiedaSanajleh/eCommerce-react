import React from 'react'
import './../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (

   <>
    
    <footer>

        
  
     <div className="footer-container">
  <div className="footer-row">
    <div className="start">
      <span>© 2025 </span>
      <span>Design by obieda senjlawi</span>
    </div>
    <div className="end">
      <div className="ele-end">
      <FontAwesomeIcon icon={faInstagram} />
        <a href="https://www.instagram.com/obieda.senjlawi">Instagram</a>
      </div>
      <div className="ele-end">
      <FontAwesomeIcon icon={faLinkedin} />
        <a href="https://www.linkedin.com/in/obieda-sanajleh-630a6a293/">Linkedin</a>
      </div>
    </div>
  </div>
</div>


    </footer>
   
    </>

  )
}

export default Footer