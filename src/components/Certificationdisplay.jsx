import React from 'react'
import mern from '../assets/images/certification/mern.png'

const Certificationdisplay = ({id,img}) => {
  return (
    <>
        <span>{id}</span>
        <div className='certification_image'>
        {/* <img src={`/kapsecode/src/assets/images/certification/${img}.png`} alt="mern"/> */}
        <img src={mern} alt="mern"/>
        </div>
  </>

    )
}

export default Certificationdisplay