import React from 'react'
import mern from '../assets/images/certification/mern.png'

const Certificationdisplay = ({id,img}) => {
  return (
    <>
        <span>{id}</span>
        <div className='certification_image'>
        <img src={img} alt={img}/>
        </div>
  </>

    )
}

export default Certificationdisplay