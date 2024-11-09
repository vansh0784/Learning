import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./login";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="header">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1728015384~exp=1728018984~hmac=9c3964fac5681f838b7a37cffb2879952a37250a8e3eb9bf2ec4876f9c755e96&w=740"
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
        <div id="addlogin">
          {login ? (
            <Link to="/logout" onClick={() => setLogin(false)}>Logout</Link>
          ) : (
            <button onClick={openModal}>Login</button>
          )}
        </div>
        {isModalOpen && <div className="modal-backdrop" onClick={closeModal}></div>}
        {isModalOpen && (
          <div className="modal">
            <LoginModal closeModal={closeModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
