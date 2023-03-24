import React from 'react'
import styled from 'styled-components'
import Certificationdisplay from '../components/Certificationdisplay'

const Certification = () => {
    const Certificationcontainer=styled.div`
        margin-top:20px;
        .certification_section{
          display:flex;
          flex-direction:column;
          flex-wrap:wrap;
          align-items:center;
          justify-content:center;
          gap:20px;
          span{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color:${({theme})=>theme.colors.color1};
            color:${({theme})=>theme.colors.white};
          }
          .certification_image{
            width:700px;
            img{

            }
          }

        }
  
  `


  const data=[
    {
      id:1,
      img:'mern'
    },
    {
      id:2,
      img:'cssflex'
    },
    {
      id:3,
      img:'htmlessential'
    },
    {
      id:4,
      img:'javascript'
    },
    {
      id:5,
      img:'javascriptdom'
    },
    {
      id:6,
      img:'css'
    },
    {
      id:7,
      img:'react'
    },
    {
      id:8,
      img:'reactessential'
    }
]

  return (
    <Certificationcontainer>
    <div className='certification_section'>
    {
      data.map((val,idx)=>{
        return(
          <Certificationdisplay
            id={val.id}  
            img={val.img}
          />

        )
      })
    }

    </div>
    </Certificationcontainer>
  )
}

export default Certification