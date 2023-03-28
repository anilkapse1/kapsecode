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
import Typewriter from "typewriter-effect";



const Heropage = () => {

    const Hero = styled.div`
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
                p{
                    letter-spacing: 7px;
                }
                button{
                    border:none;
                    outline:none;
                    padding:10px;
                    border-radius:10px;
                    background:#695AA6;
                    font-size:1vw;
                    color:${({theme})=>theme.colors.white};
                    letter-spacing: 2px;
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
                        font-size: 1.2vw;
                        background-color: rgb(217 210 235 / 40%);
                        backdrop-filter: blur(5px);
                        font-weight: 400;
                        line-height: 2;
                    }
                }
            }
        }


        &:after{
                content: "MERN";
                position: fixed;
                right: 0px;
                top: 0px;
                width: 100%;
                bottom: 0px;
                background-repeat: no-repeat;
                z-index: -1;
                transform:scale(1);
                font-size:30vw;
                color: rgb(0,0,0,.1);
                animation: magic 5s ease-in-out infinite alternate-reverse both;
                background: rgb(170,174,205);
                background: linear-gradient(184deg, rgba(170,174,205,1) 0%, rgba(255,255,255,1) 57%);

            }

            @keyframes magic{
                0%{
                    transform:scale(1.1);
                    font-size:50vw;
                }
                100%{
                    transform:scale(1);
                    font-size:30vw;
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
                    <h3>Hi!
                    </h3>
                    <h1>I'm Anil</h1>
                    <h1>Kapse</h1>
                    <p>MERN Stack Developer</p>
                    
                    <button onClick={()=>navigate('/kapsecode/portfolio/react')}>
                    
                    <Typewriter options={{
                            autoStart:true,
                            loop:true,
                            delay:80,
                            strings:[
                                "Visit My Works"
                        ]
                        }}/>

                    
                    </button>   
                </div>
                <div className='user_section'>
                    <div className='user_logo items'>
                        <img src={userlogo} alt="user logo"/>
                    </div>
                    <div className='user_details items'>
                        <h2>who am I ?
                        <Stack direction="row" style={{display:'inline-block'} }alignItems="center" spacing={.5}>
                        <a href="https://www.linkedin.com/in/anil-kapse/" target="_blank">
                            <IconButton style={{color:'#695AA6'}} aria-label="delete" size="large">
                                <LinkedInIcon/>
                            </IconButton>
                        </a>
                        <a href="https://github.com/anilkapse1" target="_blank">
                            <IconButton style={{color:'#695AA6'}}  aria-label="delete" size="large">
                                <GitHubIcon/>
                            </IconButton>
                        </a>

                        <a href="https://codesandbox.io/u/anilkapse1" target="_blank">
                            <IconButton style={{color:'#695AA6'}}  aria-label="delete" size="large">
                                <CodeIcon/>
                            </IconButton>
                        </a>
                        <a href="https://codepen.io/anilkapse1" target="_blank">
                            <IconButton style={{color:'#695AA6'}}  aria-label="delete" size="large">
                                <JavascriptIcon/>
                            </IconButton>
                        </a>

                        
                        </Stack>
                        </h2>
                        <p>
                            A Senior UI Developer, My Job Is Essentially To Turn Designs/Business Idea Into Reality Via Code And Enable User To Interact With A Data In A Safe And User-Friendly Way.
                        </p>    
                    </div>
                </div>
            </div>
        </Container>
    </Hero>
  )

}

export default Heropage