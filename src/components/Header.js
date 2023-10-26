import './Header.css'
import React from 'react'

import Container from './NavSection/Container'
import ShowCase from './ShowCase/ShowCase'



import img_backgroundlines from '../assets/images/img_backgroundlines.svg'

const Header = () => {
  return (
    <header>
      
    
     <Container />
     <ShowCase /> 
     <img className="background-lines" src={img_backgroundlines} alt="" />
     
     



  
  
    </header>
  )
}

export default Header