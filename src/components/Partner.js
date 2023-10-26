import React from 'react'

import img_paperz from '../assets/images/paperz.svg'
import img_dafus from '../assets/images/Dafus.svg'
import img_martino from '../assets/images/martino.svg'
import img_square from '../assets/images/square.svg'
import img_gobona from '../assets/images/gobona.svg'

const Partner = () => {
  return (
   
        <section className="container">
<section className="partner">
  <div className="logopartner">
  
    <img  className="paperz" src={img_paperz} alt="" />
    <img  className="dafus" src={img_dafus} alt="" />
    <img  src={img_martino} alt=""/>
    <img src={img_square} alt=""/>
    <img src={img_gobona} alt=""/>

  </div>

</section>
</section>
    
  )
}

export default Partner