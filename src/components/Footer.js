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
      <h5>Company</h5>
      <br />
    <p>About  </p>
    <p>Features</p>
    <p>Works  </p>
    <p>Career  </p>
    </div>

    <div  className="Company">
      <h5>Help</h5>
      <br />
    <p>Customer Support  </p>
   <p>Delivery Details    </p>
    <p>Terms & Conditions </p>
    <p>Privacy Policy </p>
    </div>

    <div  className="Company">
      <h5>Resources</h5>
      <br />
    <p>Free eBooks</p>
    <p>Development Tutorial</p>
    <p>How to - Blog  </p>
    <p>Youtube Playlist </p>
    </div>

    <div  className="Company">
      <h5>Link</h5>
      <br />
    <p>Free eBooks  </p>
    <p>Development Tutorial</p>
    <p>How to - Blog  </p>
    <p>Youtube Playlist  </p>
    </div>

  </div>
  
</div>

<div  className="last-bar">
  <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
  <div  className="socialmedia-bar"><a href="http://facebook.com/" target="_blank" rel="noreferrer"><i  className="fa-brands fa-facebook"></i></a>
    <a href="http://twitter.com/" target="_blank" rel="noreferrer"><i  className="fa-brands fa-square-x-twitter"></i></a>
    <a href="http://instagram.com/" target="_blank" rel="noreferrer"><i  className="fa-brands fa-instagram"></i></a>
    <a href="http://linkedin.com/" target="_blank" rel="noreferrer"><i  className="fa-brands fa-linkedin"></i></a>
  </div>
  
 </div>


</footer>
  )
}

export default Footer