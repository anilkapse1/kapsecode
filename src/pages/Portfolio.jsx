import React from 'react'
import {  Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Container from '../Container'
import plush from '../assets/images/plus.png'


const Portfolio = () => {
    const Portfolio=styled.div`
        ${'' /* background: linear-gradient(184deg, rgba(170,174,205,1) 0%, rgba(255,255,255,1) 57%); */}
        min-height:100vh;
        position:relative;
        z-index:999;
        &::after{
            background: url(/src/assets/images/plus.png) right top / 50% repeat-y;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            z-index:-1;
        }

        .portfolio_section{
            padding:50px 20px;
        }
        

    `

  return (
    <Portfolio className='portfolio_container'>
        <Container>
            <div className='portfolio_section'>
                <Header/>
                <Outlet/>
            </div>
        </Container>
    </Portfolio>
  )
}

export default Portfolio