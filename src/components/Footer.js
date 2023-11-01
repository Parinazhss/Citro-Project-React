import React from 'react'
import img_logofooter from '../assets/images/Logo-footer.svg'
import img_backlines from '../assets/images/Rectangle 116.svg'
const Footer = () => {
  return (
    <footer  className="footer">
  <img  className="background-lines" src={img_backlines} alt="" /> 

  <div  className="container">
    <div  className="logotype">
      <a  href="index.html">
        <img src={img_logofooter} alt="logo type" />
      </a>
      <p>Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Placeat obcaecati voluptas<br />
          voluptates! Voluptates laborum nam <br />
         ratione minus necessitatibus, iure<br />
          praesentium.</p>

          
    </div>

    <div  className="menu"> 
    <div  className="Company">
      <a href="#"><h5>Company</h5></a>
      <br />
    <a href="#"><p>About  </p></a>
    <a href="#"><p>Features</p></a>
    <a href="#"><p>Works  </p></a>
    <a href="#"><p>Career  </p></a>
    </div>

    <div  className="Company">
      <a href="#"><h5>Help</h5></a>
      <br />
    <a href="#"><p>Customer Support  </p></a>
    <a href="#"><p>Delivery Details    </p></a>
    <a href="#"><p>Terms & Conditions </p></a>
    <a href="#"><p>Privacy Policy </p></a>
    </div>

    <div  className="Company">
      <a href="#"><h5>Resources</h5></a>
      <br />
    <a href="#"><p>Free eBooks</p></a>
    <a href="#"><p>Development Tutorial</p></a>
    <a href="#"><p>How to - Blog  </p></a>
    <a href="#"><p>Youtube Playlist </p></a>
    </div>

    <div  className="Company">
      <a href="#"><h5>Link</h5></a>
      <br />
    <a href="#"><p>Free eBooks  </p></a>
    <a href="#"><p>Development Tutorial</p></a>
    <a href="#"><p>How to - Blog  </p></a>
    <a href="#"><p>Youtube Playlist  </p></a>
    </div>

  </div>
  
</div>

<div  className="last-bar">
  <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
  <div  className="socialmedia-bar"><a href="http://facebook.com/" target="_blank"><i  className="fa-brands fa-facebook"></i></a>
    <a href="http://twitter.com/" target="_blank"><i  className="fa-brands fa-square-x-twitter"></i></a>
    <a href="http://instagram.com/" target="_blank"><i  className="fa-brands fa-instagram"></i></a>
    <a href="http://linkedin.com/" target="_blank"><i  className="fa-brands fa-linkedin"></i></a>
  </div>
  
 </div>


</footer>
  )
}

export default Footer