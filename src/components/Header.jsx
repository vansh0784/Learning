import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [login,setLogin]=useState(false)
  return (
    <>
      <div className="header">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1728015384~exp=1728018984~hmac=9c3964fac5681f838b7a37cffb2879952a37250a8e3eb9bf2ec4876f9c755e96&w=740"
          alt="Logo"
        ></img>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
        </ul>
        <button id="loginbtn" onClick={()=>{login==false?setLogin(true):setLogin(false)}}>
            {
            login==false?(<i className="ri-admin-line"></i>):
            (<i className="ri-user-follow-fill"></i>)
            }
        </button>
      </div>
    </>
  );
};
export default Header;
