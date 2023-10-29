import React from 'react'
import '../../src/App.css'
import Button from './Generics/Button'

import img_iconbusiness from '../assets/images/features-icon-business.svg'
import img_iconstartup from '../assets/images/features-icon-startup.svg'
import img_iconfinacial from '../assets/images/features-icon-finacial.svg'
import img_iconrisk from '../assets/images/features-icon-risk.svg'


const FeaturesSection = () => {
  return (
    <section className="container">
 <div className="box">
<section className="features ">

  <div className="container">
  <p>Feature</p>
  <h2>Our Accounting is  trusted by thousand of companies</h2>
  <Button text="Learn More" url="Learnmore.html" /> 
</div> 


<div className="textinformation"> 
<div className="text-box1">
  <img  className="iconbussiness" src={img_iconbusiness} alt="" />
    <h4>Business Advice</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

</div>
<div className="text-box2">
  <img  className="iconstartup" src={img_iconstartup} alt="" />
    <h4>Startup Business</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

</div>
<div className="text-box3">
  <img  className="iconfinacial" src={img_iconfinacial} alt="" />
    <h4>Financial Advice</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

</div>
<div className="text-box4">
  <img  className="iconrisk" src={img_iconrisk} alt="" />
    <h4>Risk Management</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

</div>
</div>

</section>
</div> 
</section>
  )
}

export default FeaturesSection