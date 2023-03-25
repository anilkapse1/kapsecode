import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';



const Footer = () => {
    const Footer=styled.div`
        height:250px;
        background-color:${({theme})=>theme.colors.color1};
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        h1{
            color:${({theme})=>theme.colors.white};
            letter-spacing: 2px;
            font-weight: 200;
        }
    
    `


  return (
    <Footer>
        <h1>Made with <FavoriteIcon/> by Ani Kapse</h1>
        <p><i>Thank you for visit!</i></p>

    </Footer>
  )

}

export default Footer