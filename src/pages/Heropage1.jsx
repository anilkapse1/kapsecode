import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { IconButton } from '@mui/material'
import user from '../assets/images/user3.png'
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';



const Heropage1 = () => {

    const navigate = useNavigate();

    const Hero=styled.div`
        height:100vh;
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;

        .items{
        }

        .info{
            flex-basis:70%;
            align-self:center;
            padding: 0px 50px;
            h3{
                margin-bottom:15px;
            }
            h1{
                margin-bottom:15px;
                font-weight:300;

            }
            h4{
                color:#695AA6;
                text-transform:uppercase;
                font-weight: 500;
                margin-bottom:15px;
                letter-spacing: 2px;
            }
            p{
                color:#695AA6;
                font-size:1.5vw;
                margin-bottom:15px;
                color:black;
                font-weight: 300;
            }
        }
        .logo{
            flex-basis:30%;
            display:flex;
            justify-content:center;
            align-items:center;
            background-color: #eaeced;
            flex-direction:column;

            .image_container{
                width:70%;
                margin-bottom:20px;
                img{
    
                }
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

        &:after{
                content: "MERN";
                position: fixed;
                bottom: 0px;
                width: 100%;
                background-repeat: no-repeat;
                z-index: -1;
                transform:scale(1);
                font-size:25vw;
                color: rgb(0,0,0,.1);
                animation: magic 10s ease-in-out infinite alternate-reverse both;
                animation-direction:inherit;

            }
        
        @keyframes magic{
                0%{
                    transform:scale(1.1);
                    bottom:-100%;
                    opacity:1;
                }
                100%{
                    transform:scale(1);
                    bottom:100%;
                    opacity:0;
                }
            }

    
    `

  return (
    <React.Fragment>
        <Hero className='Hero_container'>
            <section className='info items'>
                <h3>Hi!</h3>
                <h1>I'm Anil Kapse</h1>
                <h4>mern stack developer</h4>
                <p>A Senior UI Developer, My Job Is Essentially To Turn Designs/Business Idea Into Reality Via Code And Enable User To Interact With A Data In A Safe And User-Friendly Way.</p>
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
            </section>

            <section className='logo items'>
                <div className='image_container'>
                    <img src={user} alt="demo"/>
                </div>
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
            </section>
        </Hero>


    </React.Fragment>
  )
}

export default Heropage1