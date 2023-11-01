import React from 'react'
import Button from './Generics/Button'
import img_backgroundright from '../assets/images/backgroundline-right.svg'

const NewsLetter = () => {
  return (
    <section  className="newsletter">
  <img  className="backgroundline-right" src={img_backgroundright} alt="" />
  <div  className="container">
    <h2>Get News Updates By Signup</h2>
    <form>
      <input type="text" placeholder="username@domain.com" />
    
      <Button type="yellow" text="Subscribe" url="" /> 
    </form>

  </div>

</section>
  )
}

export default NewsLetter