import { Link } from "react-router-dom";
import appLogo2 from "../assets/logoNew.webp"
const Footer = () => {
  return (
    <>
      <div className="main-foot">
        <div className="containerfoot">
          <div className="branding">
            <img
              id="footer-logo"
              src={appLogo2}
              alt="Logo"
            />
            <h4>Food Villa</h4>
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
              <strong>Contact</strong>: support@foodvilla.com
            </p>
            <p>
              <strong>Phone</strong>: +1 234-567-890
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Food Villa. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
