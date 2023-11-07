
import React from 'react'
import Button from './Generics/Button'


import { useState } from 'react'

const ContactForm = () => {
     
     const [name, setName] = useState('')
     const [message, setMessage] = useState('')
     const [email, setEmail] = useState('')

     const handelSubmit = (e) => {
      e.preventDefault()

         console.log(name + '|' + email + '|' + message)
     }
  

 
  return (
    <section className="contact-form">
  <div className="container ">
    <h1>Leave us a message <br/> 
      for any information.</h1>
    <form className="contactform" >
      
      <input id="name"  type= "text"  placeholder="Name*" value={name} onChange={ (e)=> setName(e.target.value)} />
      

      <input id="email" type= "email"  placeholder="Email*"  value={email} onChange={ (e)=> setEmail(e.target.value)}/>
      
     
      
      <div className="your-massage">
        <input  id="message" type="text" placeholder="Your Message*" value={message} onChange={ (e)=> setMessage(e.target.value)} />
       

      </div>

      <Button  type="submit" onClick={handelSubmit}> Send Message </Button>
     

    </form>

    

</div>
  </section>
  )
}

export default ContactForm