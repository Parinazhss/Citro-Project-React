import React from 'react'

const Button = ({text ,url}) => {
  return (
    <a className="btn-yelloW" href={url}>
         {text} 
         <i className="fa-solid fa-arrow-up"></i></a>
  )
}

export default Button