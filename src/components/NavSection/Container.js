import './Container.css'
import React from 'react'
import logotype from '../../assets/images/Logo.svg'
import Button from '../Generics/Button'

const Container = () => {
  return (
    <div className="container">
      <button className="btn-menubars"><i className="fa-regular fa-bars"></i></button>
     <a href="home.html"> <img className="logotype" src={logotype} alt="" /></a>
        
      
      
      <div className="contactinformation-bar ">
        <div className="contant-box"> 
          <i className="fa-solid fa-phone-volume"></i>
          +46 (8) 121 470 50
         
      </div>
      <div className="contant-box"> 
          <i className="fa-regular fa-envelope"></i>
         info@citro.com
      </div>
      <div className="contant-box last"> 
          <i className="fa-solid fa-location-dot"></i>
          Sveavägen 31, 111 34 STOCKHOLM
      </div>
      </div>
      
      <div className="socialmedia-bar"><a href="http://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="http://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="http://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="http://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <div className="menu"> 
        <nav>
          <a className="activ" href="home.html">Home</a>
                 <a href="services.html">Service</a>
                 <a href="news.html">News</a>
                 <a href="contacts.html">contacts</a>
        </nav>
        <Button text="Logoin" url="logoin.html" />

      </div>   
    </div>
  )
}

export default Container