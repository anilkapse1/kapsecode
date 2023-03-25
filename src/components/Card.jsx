import React from 'react'

const Card = ({id,title,hours,by,path,img}) => {
  return (
   
        <div className='card'>
            <a href={path} target="blank">
                <div className='image_container'>
                    <img src={img} alt="demko"/>
                </div>
                <div className='text_container'>
                    <h4>{title}</h4>
                    <span>created by: {by}</span>
                    <h5>hours: {hours}</h5>
                </div>
            </a>
        </div>
   

  )
}

export default Card