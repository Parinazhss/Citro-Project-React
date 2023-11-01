
import React from 'react'

import Button from '../components/Generics/Button'
import img_one from '../assets/images/pic1.svg'
import img_two from '../assets/images/pic2.svg'
import img_three from '../assets/images/pic3.svg'
import img_four from '../assets/images/pic4.svg'
import img_dot from '../assets/images/dot.svg'
import img_stars from '../assets/images/Star.svg'
import MeetTextBox from '../components/MeetTextBox'
import MeetClientBox from '../components/MeetClientBox'
import img_clientone from '../assets/images/client1.svg'
import img_clienttwo from '../assets/images/client2.svg'
 import img_clientthree from '../assets/images/client3.svg'

const MeetTeam = () => {
  return (
    <section className="meet-our-team">
  <div className="container">
   
    <div className="title">
      <p>Meet Our Team</p>
      <h3>Experience Team Members</h3>
      <Button type="" text="Brows Team" url="Browsteam.html" /> 
      
    </div>

    <div className="four-pictures"> 
    <div className="picture">
      <img className='picone' src={img_one} alt="" />
      <h5>Kristine Palmer</h5>
      <p>Chef Operation Officer</p>
    </div>
    
    <div className="picture">
    <img className='pictwo' src={img_two} alt="" />
      <h5>Mark Aubri</h5>
      <p>Senior Consultant</p>
    </div>

    <div className="picture">
    <img className='picthree' src={img_three} alt="" />
      <h5>Kimberly Hansen</h5>
      <p>Senior Consultant</p>
    </div>

    <div className="picture">
    <img className='picfour' src={img_four} alt="" />
      <h5>Justin Willoman</h5>
      <p>Senior Tech Consultant</p>
    </div>
  </div>

 <div className="punkter"> 
 <img className="punkter" src={img_dot} alt="" />
 </div>


 <div className="parent">
  <div className=" box">
    <div className="title">
      <p>Testimonial</p>
      <h3>What Our Client Says</h3>
    </div>

    <div className="text">
     <MeetTextBox />
     <MeetTextBox />
     <MeetTextBox />
    </div>

    <div className="client">
        <MeetClientBox img={img_clientone} title="Cassandra Warren" text="Bussiness,Dorfus" />
        <MeetClientBox img={img_clienttwo} title="Amanda Tulling" text="Senior Developer,Square" />
        <MeetClientBox img={img_clientthree} title="Jack McDogglas" text="Key Account Manager,Gobona" />
    </div>

    <div className="center-content">
      <a className="btn-black" href="reviews.html"> All Reviews <i className="fa-solid fa-arrow-up"></i></a>
    </div>
     

  </div>
</div>

  </div>
</section>

  )
}

export default MeetTeam