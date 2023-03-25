import React from 'react'
import mern from '../assets/images/certification/mern.png'

const Certificationdisplay = ({id,img,title}) => {
  return (
    <>
        <span>{id}</span>
        <h3>{title}</h3>
        <div className='certification_image'>
            <img src={img} alt={img}/>
        </div>
  </>

    )
}

export default Certificationdisplay