import './ShowCase.css'
import React from 'react'


import img_showcas from '../../assets/images/Showcase.svg'
import img_backgroundlines from '../../assets/images/img_backgroundlines.svg'
import Button from '../Generics/Button'


const ShowCase = () => {
  return (
    <section className="showcase">
    
    <div className="container">
       <div className="content">
         <h1>We Provide The Best Business Solutions</h1>
         <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
         <Button type="yellow" text="Get Consuling" url="getconsuling.html"/>

         <Button  type="yellow" text="Learn More" url="learnmore.html"/>
         
       </div>
      <img className="showcaseimge" src={img_showcas} alt='' />
      <img className="background-lines" src={img_backgroundlines} alt="" />

    </div>
</section>
  )
}

export default ShowCase