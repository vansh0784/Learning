import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <div className="main-foot">
        <div className="containerfoot">
            <div className="branding">
                < img id="footer-logo" src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1728015384~exp=1728018984~hmac=9c3964fac5681f838b7a37cffb2879952a37250a8e3eb9bf2ec4876f9c755e96&w=740" alt="Logo" />
                <h4>Food Villa</h4>
                <p>Delicious food delivered fast.</p>
            </div>
            <div className="footer-links">
                <ul id="Foot-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart"></Link>Cart</li>
                </ul>
            </div>
            <div className="contact-foot">
                <p><strong>Contact</strong>:  support@foodvilla.com</p>
                <p><strong>Phone</strong>: +1 234-567-890</p>
            </div>

        </div>
        <div className="copyright">
                <p>© 2024 Food Villa. All rights reserved.</p>
        </div>
        </div>
        </>
    )
}
export default Footer;