import { useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/logoNew.webp"
import LoginPage from "./LoginPage";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="header">
        <img
          src={appLogo}
          alt="Logo"
        />

        <div id="navitems">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <i className="ri-shopping-cart-fill">Cart</i>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
        <div id="addLogin">
          <button id="loginlogo"><i class="ri-account-box-line"></i></button>
        </div>
        </div>

    </>
  );
};

export default Header;
