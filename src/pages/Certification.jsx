import React from 'react'
import styled from 'styled-components'
import Certificationdisplay from '../components/Certificationdisplay'
// importing images
import css from '../assets/images/certification/css.png'
import cssflex from '../assets/images/certification/cssflex.png'
import htmlessential from '../assets/images/certification/htmlessential.png'
import javascript from '../assets/images/certification/javascript.png'
import javascriptdom from '../assets/images/certification/javascriptdom.png'
import mern from '../assets/images/certification/mern.png'
import react from '../assets/images/certification/react.png'
import reactessential from '../assets/images/certification/reactessential.png'


const Certification = () => {
    const Certificationcontainer=styled.div`
        p{
          font-size:2vw;
          span{
            background-color: azure;
            width: 50px;
            height: 50px;
            display: inline-block;
            border-radius: 50%;
            text-align: center;
            line-height: 50px;
            font-weight: bold;
          }
        }

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
          h3{
            background-color: aliceblue;
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
      img:mern,
      title:'Full Stack Web Development Internship Program'

    },
    {
      id:2,
      img:cssflex,
      title:'Advanced Responsive Layouts with CSS Flexbox'
    },
    {
      id:3,
      img:htmlessential,
      title:'HTML Essential Training'
    },
    {
      id:4,
      img:javascript,
      title:'JavaScript Best Practice for Code Formatting'
    },
    {
      id:5,
      img:javascriptdom,
      title:'JavaScript Enhancing the DOM'
    },
    {
      id:6,
      img:css,
      title:'Interactive Animation with CSS and JavaScript'
    },
    {
      id:7,
      img:react,
      title:'Building Modern Project with React'
    },
    {
      id:8,
      img:reactessential,
      title:'React.js Essential Training'
    }
]

  return (
    <Certificationcontainer>
    <p>I am happy to say that I have achieved a total <span>{data.length}</span> certification, and more to come </p>
      <div className='certification_section'>
      {
        data.map((val,idx)=>{
          return(
            <Certificationdisplay
              key={idx}
              {...val}
            />

          )
        })
      }

      </div>
    </Certificationcontainer>
  )
}

export default Certification