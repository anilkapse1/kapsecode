import React from 'react'


const Certificationdisplay = ({id,img}) => {
  return (
    <>
        <span>{id}</span>
        <div className='certification_image'>
        <img src={`/kapsecode/src/assets/images/certification/${img}.png`} alt="mern"/>
        </div>
  </>

    )
}

export default Certificationdisplay