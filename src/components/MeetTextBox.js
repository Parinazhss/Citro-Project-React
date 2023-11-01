import React from 'react'
import img_stars from '../assets/images/Star.svg'

const MeetTextBox = () => {
  return (
    <div className="text">
    <img className="stars" src={img_stars} alt="" />
    <p>"Lorem ipsum dolor, sit amet consectetur  <br/>  
       adipisicing elit. Laudantium libero, ad   
        dignissimos velit qui, dolorum obcaecati<br/>    
        cum saepe nesciunt nemo eligendi   
         numquam voluptate"</p>
  </div>
  )
}

export default MeetTextBox