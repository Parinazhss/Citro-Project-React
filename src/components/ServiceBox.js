import React from 'react'

const ServiceBox = ({title , description , url}) => {
  return (
    <div className="box2">
        <hr/>
        <h5>{title}</h5>
        <p>{description}</p>
         <a className="btn-circle-black" href={url} ><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>
      </div>
     
  )
}

export default ServiceBox