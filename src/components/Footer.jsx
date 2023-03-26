import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';

import codepen from '../assets/images/codepen.png'
import codesandbox from '../assets/images/codesandbox.png'
import jsfiddle from '../assets/images/jsfiddle.png'



const Footer = () => {
    const Footer=styled.div`
        padding:50px 0px;
        background-color:${({theme})=>theme.colors.color1};
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        align-content:center;
        justify-content:center;
        text-align:center;
        h1{
            color:${({theme})=>theme.colors.white};
            letter-spacing: 2px;
            font-weight: 200;
        }
        p{
          color: #bdbdbd;
          font-size: 20px;
        }
        .learn_container{
          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
          gap:20px;
          justify-content: center;
          img{
            width: 50px;
            height:50px;
            background-color: black;
            border-radius: 50%;
            padding:5px;
            }
        }
    
    `


  return (
    <Footer>
        <h1>Made with <FavoriteIcon style={{color:"red"}}/> by Ani Kapse</h1>
        <p><i>You can explore an example here...</i></p>
        <div className='learn_container'>
          <a href="https://codepen.io/anilkapse1" target="_blank"><img src={codepen} alt="codepen"/></a>
          <a href="https://codesandbox.io/u/anilkapse1" target="_blank"><img src={codesandbox} alt="codesandbox"/></a>
          <a href="https://jsfiddle.net/user/kapsecode/" target="_blank"><img src={jsfiddle} alt="jsfiddle"/></a>
        </div>

    </Footer>
  )

}

export default Footer