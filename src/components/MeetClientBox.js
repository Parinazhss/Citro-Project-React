import React from 'react'

const MeetClientBox = ({img, title, text}) => {
  return (
    <div className="client">
    <img src={img}  />
    <h5>{title}</h5>
    <p>{text}</p>

  </div>
  )
}

export default MeetClientBox