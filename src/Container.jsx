import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
    const Mycontainer=styled.div`
        max-width:1084px;
        margin:auto;
    `
  return (
    <Mycontainer className='custom_container'>
        {props.children}
    </Mycontainer>
  )
}

export default Container