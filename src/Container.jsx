import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
    const Mycontainer=styled.div`
        max-width:1024px;
        margin:auto;
    `
  return (
    <Mycontainer className='custom_container'>
        {props.children}
    </Mycontainer>
  )
}

export default Container