import { useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/logoNew1.png";
import LoginPage from "./LoginPage";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="header">
        <img id="logonew" src={appLogo} alt="Logo" />

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
            <div id="addLogin">
          <button id="loginlogo" onClick={openModal}>
            {login == 0 ? (
              <>
                <i id="profileicon"className="ri-account-box-line"></i><p>SignIn</p>
              </>
            ) : (
              <>
                <p>Logout</p>
                {setLogin(true)}
              </>
            )}
          </button>
        </div>
        <div>
        {isModalOpen && (
        <>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div>
            <LoginPage />
          </div>
        </>
      )}
        </div>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Header;
