import React from "react";
import "./../Navbar/Navbar.css";
import obiedaStoreLogo from "./../../assets/img/obiedastore.svg";
import { NavLink , useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
  faGripLines,

} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const handelClickNavBtn = () => {
    const navbar = document.querySelector(".nav-phone-size");
    navbar.classList.toggle("nav-phone-size-out");
    navbar.classList.toggle("nav-phone-size-in");
  };

  let navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  const handelClickNavPhoneSize = ()=>{
    const navbar = document.querySelector(".nav-phone-size");
    navbar.classList.toggle("nav-phone-size-out");
    navbar.classList.toggle("nav-phone-size-in");
  }



const aboutHandelclick= async () => {

        
     await navigate('/home').then(  ()=>{document.getElementById("about").scrollIntoView({ behavior: "smooth" });} )
      

}
const handleLogOutClick = () => {
  localStorage.removeItem("token");
  navigate("/");
};


  return (
    <header>
      <div className="container-navbar">
        <div class="row-navbar">
          <div className="logo-part">
            <img src={obiedaStoreLogo} alt="logo" />
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/home#home" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/home#about" end>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" end>
                  Shop
                </NavLink>
              </li>
           
              <li>
                <NavLink to="/contact" end>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="utility-icons">
            <div onClick={handelClickNavBtn} className="nav-phone-size-btn">
              <i>
                {" "}
                <FontAwesomeIcon icon={faGripLines} />{" "}
              </i>
            </div>
        
            
            <i>
              <FontAwesomeIcon onClick={()=>{navigate('/favorite')}} icon={faHeart} />
            </i>
         
            
            <i>
              <FontAwesomeIcon onClick={()=>{navigate('/cart')}} icon={faCartShopping} />
            </i>

            {token === null ? (
              <i>
                <FontAwesomeIcon onClick={() => navigate("/user")} icon={faUser} />
              </i>
            ) : (
              <i>
                <button onClick={handleLogOutClick}>Logout</button>
              </i>
            )}   

          </div>

          <div className="nav-phone-size nav-phone-size-out" onClick={handelClickNavPhoneSize}>
          <ul>
              <li>
                <NavLink to="/home#home" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/home#about" end>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" end>
                  Shop
                </NavLink>
              </li>
           
              <li>
                <NavLink to="/contact" end>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
