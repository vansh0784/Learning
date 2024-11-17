import { Link } from "react-router-dom";
import appLogo2 from "../assets/logoNew1.png"
const Footer = () => {
  return (
    <>
      <hr className="hrline" />
      <div className="main-foot">
        <div className="containerfoot">
          <div className="branding">
            <img
              id="footer-logo"
              src={appLogo2}
              alt="Logo"
            />
            <h4>Dil Se Dine</h4>
            <p>Delicious food delivered fast.</p>
          </div>
          <div className="footer-links">
            <ul id="Foot-link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="contact-foot">
            <p>
              <strong>Contact</strong>: support@dilsedine.com
            </p>
            <p>
              <strong>Phone</strong>: +1 234-567-890
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Dil Se Dine. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
