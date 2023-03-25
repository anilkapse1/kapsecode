import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import react1 from '../assets/images/react/reactproject.jpg'
import Card from '../components/Card'

import reactproject from '../assets/images/react/reactproject.jpg'



const Reactwork = () => {

  const Reactcontainer=styled.div`
    margin-top:20px;
    .project_list{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:30px;
      .card{
        flex:0 0 300px;
        border:1px solid #e1e1e1;
        border-radius:5px;
        background-color: white;
        .image_container{
          width:60%;
          margin:auto;
          padding:10px;

          img{

          }
        }
        .text_container{
          padding:10px;
          border-top:1px solid #e1e1e1;
          h4{
            color:${({theme})=>theme.colors.color2};
            font-size:1.2vw;
            font-weight:500;
            }
            span{
              font-size:.9vw;
            }
            h5{
              color:${({theme})=>theme.colors.color2};
              font-weight: 400;
              text-transform: capitalize;
              margin-top: 10px;
            }
        }
      }
    }
  
  `

  const data = [
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    },
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    },
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    },
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    },
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    },
    {
      id:1,
      title:"make sure customers find you online",
      hours:4,
      by:"anil kapse",
      path:"https://anilkapse1.github.io/kapsecode/",
      img:reactproject
    }

  ]
  return (

    <Reactcontainer>
      <div className='project_list'>
        {
          data.map((val,idx)=>{
            return(
              <Card
                key={idx}
                {...val}
              />
            )
          })
        }
      </div>
    </Reactcontainer>
  )
}

export default Reactwork