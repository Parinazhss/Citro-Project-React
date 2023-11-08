import React from 'react'
import img_first from '../assets/images/article Image-1.png'
import img_second from '../assets/images/article image-2.png'
import img_third from '../assets/images/article image-3.png'
import img_fourth from '../assets/images/article image-4.png'
import Button from './Generics/Button'

const ProjectCase = () => {
  return (
    <section className="project-and-case">
  <div className="container">
    <div className="section-title">
     <p>Project & Case Studies</p>
     <h2>Let’s Looks Our Global Projects</h2>
    </div>

    <div className="project-and-case">
      <div className="project"  >
        <img  className= "firstimage"src={img_first} alt="A mans hands reading a business paper" />
        <h3>Grow your business</h3>
        <div className="readmore" >Read More<i className="fa-solid fa-arrow-up"></i></div>
      </div>
      <div className="project"  >
        <img  className= "secondimage"src={img_second} alt="Pink Apple products on the desk" />
        <h3>Why your client needs a responsive website</h3>
        <div className="readmore" >Read More<i className="fa-solid fa-arrow-up"></i></div>
      </div>
      <div className="project"  >
        <img  className= "thirdimage"src={img_third} alt="Desk with office supplies" />
        <h3>Educate your employees to get better results</h3>
        <div className="readmore" >Read More<i className="fa-solid fa-arrow-up"></i></div>
      </div>
      <div className="project"  >
        <img  className= "fourthimage"src={img_fourth} alt="Laptop with Business Intelligence Insights" />
        <h3>Business Insights is a important piece of your business</h3>
        <div className="readmore" >Read More<i className="fa-solid fa-arrow-up"></i></div>
      </div>
    </div>
    <div className="center-content">
    
    <Button type="" text="All Recent Projects" url="projects.html" />

  </div>
  </div>
</section>

  )
}

export default ProjectCase