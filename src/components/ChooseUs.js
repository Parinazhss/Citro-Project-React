import React from 'react'
import img_firsticon from '../assets/images/1st.icon.svg'
import img_secondicon from '../assets/images/2nd.icon.svg'
import img_thirdicon from '../assets/images/3rd.icon.svg'
import img_fourthicon from '../assets/images/4th.icon.svg'
import img_women from '../assets/images/two.women.svg'
 
const ChooseUs = () => {
  return (
    <section className="choose">
  <div className="container">

    <div className="title"> 
      <div className="red-title">
        <p>Why Choose Us</p>
      <h2>Why We Are The <br />Best Business <br />Consulting Agency</h2>
    </div>

       
         <img classNeme="firsticon" src={img_firsticon} alt=""/>
        <div className="icon.1"> 
        <h5>Process Excellence</h5>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
       </div> 
  
      <div className="icon.2">
      <img classNeme="secondicon" src={img_secondicon} alt=""/>
        <h5>Strategic Planning</h5>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </div>
  
      <div className="icon.3">
      <img classNeme="thirdicon" src={img_thirdicon} alt=""/>
        <h5>Experience Design</h5>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </div>
  
      <div className="icon.4">
      <img classNeme="fourthicon" src={img_fourthicon} alt=""/>
        <h5>Artificial Inteligence</h5>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </div>

    </div>

    <div className="parent">
      <div className=" back-box">
        
         <img className="image" src={img_women} alt="" /> 

      </div>
  </div>
  </div>

</section>
  )
}

export default ChooseUs