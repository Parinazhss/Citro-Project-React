import React from 'react'
import Button from './Generics/Button'

const OurService = () => {
  return (
    <section className="our-service">
  <img className="background-lines" src="images/backlines-ourservice.svg" alt=""/>
  <div className="container">
    <div className="title">
    <p> Our Service</p>
      <h5>We Provide The Best <br/> Service For Consulting</h5>
    </div> 

    <div className="parent">
      <div className="box1">
        <hr/>
        <h5>Business Advice</h5>
        <p>Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit. 
          Officiis<br/> in nam possimus.</p>
          <a className="btn-circle-black" href="" ><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>

      </div>
      <div className="box2">
        <hr/>
        <h5>Startup Business</h5>
        <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit. 
          Officiis<br /> in nam possimus.</p>
          <a className="btn-circle-black" href="" ><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>

      </div>
      <div className="box3">
        <hr/>
        <h5>Financial Advice</h5>
        <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit. 
          Officiis<br /> in nam possimus.</p>
          <a className="btn-circle-black" href="" ><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>

      </div>
      <div className="box4">
        <hr/>
        <h5>Risk Management</h5>
        <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit. 
          Officiis<br /> in nam possimus.</p>
         <a className="btn-circle-black" href="" ><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>
      </div>
    </div> 

  </div>
  <div className="center-content">
    <Button text=" Brows Services" url="services.html" />
    <a className="btn-black" href="projects.html"> Brows Services <i className="fa-solid fa-arrow-up"></i></a>

  </div>

</section>
  )
}

export default OurService