import React from 'react'

import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(name + '|' + email + '|' + message)
  }

  return (
    <section className="contact-form">
      <div className="container">
        <h1>Leave us a message <br/> for any information.</h1>
        <form className="contactform" onSubmit={handleSubmit}>

          <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="your-massage">
            <input  type="text"  placeholder="Your Message*" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          
          <button className="btn-yellow" type="submit">Send Message</button>
   
        </form>
      </div>
    </section>
  )
}

export default ContactForm
