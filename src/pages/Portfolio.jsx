import React from 'react'
import styled from 'styled-components'
import Container from '../Container'


const Portfolio = () => {
    const Portfolio=styled.div`
        background:red

    `

  return (
    <Portfolio className='portfolio_container'>
        <Container>
            <div className='portfolio_container'>
                <p>portfolio pages</p>
            </div>
        </Container>
    </Portfolio>
  )
}

export default Portfolio