import React from 'react'

const ContactInfo = () => {
  return (
    <section className="contact-box">
        <div className="container">
            <div className="visit  border">
               <div className="icon"><i className="fa-solid fa-location-dot"></i></div> 
                <h5>Visit us</h5>
                <p>Sveavägen 31 <br />
                111 34 STOCKHOLM</p>
            </div>
            <div className="call border">
                <div className="icon"><i className="fa-solid fa-phone"></i></div> 
                <h5>Call us</h5>
                <p>+46 (8) 121 470 50 <br />
                    +46 (8) 121 470 51</p>
            </div>
            <div className="email border">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div> 
                <h5>Email us</h5>
                <p>info@crito.com <br />
                    support@crito.com</p>
            </div>
        </div>

    </section>
  )
}

export default ContactInfo