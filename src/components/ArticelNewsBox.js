import React from 'react'

const ArticelNewsBox = ({img,text,title}) => {
  return (
    <div  className="article">
    <img src={img}  />
    <p>{text}</p>
    <h5>{title}</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
  </div>
  )
}

export default ArticelNewsBox