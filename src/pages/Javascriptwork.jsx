import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import '../assets/style/card.scss'
import javascriptproject from '../project/Javascriptprojectlist'


const Javascriptwork = () => {

    const Javacontainer=styled.div`
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
    <Javacontainer>
    <p>I am happy to say that I have done a total <span>{javascriptproject.length}</span> project, and more to come </p>

<div className='project_list'>
  {
    javascriptproject.map((val,idx)=>{
      return(
        <Card
          key={idx}
          {...val}
        />
      )
    })
  }
</div>
    </Javacontainer>
  )
}

export default Javascriptwork