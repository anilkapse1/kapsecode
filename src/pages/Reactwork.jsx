import { style } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import '../assets/style/card.scss'
import reactproject from '../project/Reactprojectlist'


const Reactwork = () => {

  const Reactcontainer=styled.div`
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
  `

  return (

    <Reactcontainer>
        <p>I am happy to say that I have done a total <span>{reactproject.length}</span> project, and more to come </p>

      <div className='project_list'>
        {
          reactproject.map((val,idx)=>{
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