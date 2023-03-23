import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import userlogo from '../assets/images/user.png'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';



const Heropage = () => {

    const Hero = styled.div`
        background: rgb(170,174,205);
        background: linear-gradient(184deg, rgba(170,174,205,1) 0%, rgba(255,255,255,1) 57%);
        height:100vh;

        .custom_container{
            padding:90px 20px 0 20px;
        }

        .hero_section{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            height: calc(100vh - 90px);
            align-items: center;
            justify-content: space-between;
            .text_section{
                h3{
                    font-size:2vw;
                    margin-bottom:10px;
                    font-family: 'Gudea', sans-serif;
                    font-weight:100;
                }
                h1{
                    font-size:3vw;
                    margin-bottom:10px;
                    font-family: 'Gudea', sans-serif;
                }
                p{
                    font-size:3vw;
                    margin-bottom:10px;
                    letter-spacing: 7px;
                    font-weight: 200;
                }
                button{
                    border:none;
                    outline:none;
                    padding:10px;
                    border-radius:10px;
                    background:#695AA6;
                    font-size:1vw;
                    color:white;
                    &:hover{
                        cursor:pointer;
                    }
                }
                
            }
            .user_section{
                display:flex;
                flex-flow:row wrap;
                justify-content:center;
                align-items: end;
                .user_logo{
                    height: 200px;
                    width: 200px;
                    overflow: hidden;
                    margin-right:60px;
                    img{
                    }
                }
                .user_details{
                    flex-basis:70%;
                    h2{
                        color:#695AA6;
                        font-family: 'Gudea', sans-serif;
                        font-size:2vw;
                        margin-bottom:10px;
                    }

                    p{
                        font-size:1vw;
                    }
                }
            }
        }
    `
    //style end

    const navigate = useNavigate();

    return (
    <Hero className='hero_container'>
        <Container>
            <div className='hero_section'>
                <div className='text_section'>
                    <h3>Hi!</h3>
                    <h1>I'm Anild</h1>
                    <h1>Kapse</h1>
                    <p>MERN Stack Developer</p>
                    <button onClick={()=>navigate('/kapsecode/portfolio')}>Visit My Works</button>   
                </div>
                <div className='user_section'>
                    <div className='user_logo items'>
                        <img src={userlogo} alt="user logo"/>
                    </div>
                    <div className='user_details items'>
                        <h2>who am I ?</h2>
                        <Stack direction="row" alignItems="center" spacing={.5}>
                        <a href="https://www.linkedin.com/in/anil-kapse/" target="_blank">
                            <IconButton aria-label="delete" size="large">
                                <LinkedInIcon/>
                            </IconButton>
                        </a>
                        <a href="https://github.com/anilkapse1" target="_blank">
                            <IconButton aria-label="delete" size="large">
                                <GitHubIcon/>
                            </IconButton>
                        </a>

                        <a href="https://codesandbox.io/u/anilkapse1" target="_blank">
                            <IconButton aria-label="delete" size="large">
                                <CodeIcon/>
                            </IconButton>
                        </a>
                        <a href="https://codepen.io/anilkapse1" target="_blank">
                            <IconButton aria-label="delete" size="large">
                                <JavascriptIcon/>
                            </IconButton>
                        </a>

                        
                        </Stack>
                        <p>A Senior UI Developer, My Job Is Essentially To Turn Designs/Business Idea Into Reality Via Code And Enable User To Interact With A Data In A Safe And User-Friendly Way.</p>    
                    </div>
                </div>
            </div>
        </Container>
    </Hero>
  )

}

export default Heropage