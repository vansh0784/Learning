import React from "react";
const Contact=()=>{
    return(
        <>
                <h1 className="Cont-Head">Contact Us</h1>
                <div id="Contact">
                    <div className="box">
                        <h2>Contact Details</h2>
                        <p><strong>Email:</strong> support@foodvilla.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Food Street, Food City, FC 12345</p>
                    </div>
                    <div>
                    <h2>Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1763804059175!2d-122.42163908468169!3d37.774929579759525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815e0f0f4c03%3A0x1a84e46cd913b207!2sFoodVilla!5e0!3m2!1sen!2sus!4v1633940821344!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    </div>
                </div>

        </>
    )
}
export default Contact;