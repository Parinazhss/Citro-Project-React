import React from 'react'
import Button from './Generics/Button'

import ServiceBox from './ServiceBox'
import img_backline from '../assets/images/backlines-ourservice.svg'

const OurService = () => {
  

  
  return (
    <section className="our-service">
  <img className="background-lines" src={img_backline} alt="" />
  <div className="container">
    <div className="title">
    <p> Our Service</p>
      <h5>We Provide The Best <br/> Service For Consulting</h5>
    </div> 

    <div className="parent">
      <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Officiis in nam possimus." url="/services/businessadvice" />
      <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet  consectetur adipisicing elit. 
          Officiis in nam possimus." url="" />
      <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Officiis in nam possimus." url="" />
      <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Officiis in nam possimus." url="" />

  </div>
  <div className="center-content">
    <Button  type="" text=" Brows Services" url="services.html" />
    

  </div>
  </div>
</section>
  )
}

export default OurService