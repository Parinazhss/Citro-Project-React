import React from 'react'

import img_womanstand from '../assets/images/woman-stand.svg'
import Button from './Generics/Button'

const AboutCompany = () => {
  return (
    <section className="container">
<section className="about-company">
    
      <img className="womanStand" src={img_womanstand} alt="" />
    
  
  <div className="bluetext border">

    <h5> Samantha Brown,</h5>
    <div className="textcolor"><p> Founder</p></div>
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
  </div>
  <div className="about">
    <div className="title">
    <p>About Company</p>
  
  </div>
    <h4>We Are Business Consulting & Credit Repair Experts</h4>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
       officiis quas assumenda esse obcaecati? Ex esse error voluptates iure 
       vel totam eos.<br/> <br/>
       
       
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
       quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
       

       <div className="Intro">
      
      <Button  text=" Learn More" url="learnmore.html" />
      <div className="intro-video">
                <i className="fa-regular fa-circle-play fa-2xl"></i> Intro Video
       </div>
    </div>
  </div>
</section>
</section>
  )
}

export default AboutCompany