import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import websiteproject from '../project/Websiteprojectlist'
import '../assets/style/card.scss'


const Websitework = () => {

    const Webcontainer=styled.div`
    margin-top:20px;
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
    <Webcontainer>
        <p>I am happy to say that I have done a total <span>{websiteproject.length}</span> project, and more to come </p>
        <div className='project_list'>
        {
          websiteproject.map((val,idx)=>{
            return(
              <Card
                key={idx}
                {...val}
              />
            )
          })
        }
      </div>
    </Webcontainer>
  )
}

export default Websitework