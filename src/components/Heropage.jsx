import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import userlogo from '../assets/images/user.png'

const Heropage = () => {

    const Hero = styled.div`
        background: rgb(170,174,205);
        background: linear-gradient(184deg, rgba(170,174,205,1) 0%, rgba(255,255,255,1) 57%);
        height:100vh;

        .custom_container{
            padding-bottom:0px;
        }

        .hero_section{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            height: calc(100vh - 22px);
            align-items: center;
            justify-content: space-between;
            padding-bottom:0px;
            padding-top:70px;
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


    return (
    <Hero className='hero_container'>
        <Container>
            <div className='hero_section'>
                <div className='text_section'>
                    <h3>Hi!</h3>
                    <h1>I am Anil</h1>
                    <h1>Kapse</h1>
                    <p>MERN Stack Developer</p>
                    <button>Visit My Works</button>   
                </div>
                <div className='user_section'>
                    <div className='user_logo items'>
                        <img src={userlogo} alt="user logo"/>
                    </div>
                    <div className='user_details items'>
                        <h2>who am I ?</h2>
                        <p>A Senior UI Developer, My Job Is Essentially To Turn Designs/Business Idea Into Reality Via Code And Enable User To Interact With A Data In A Safe And User-Friendly Way.</p>    
                    </div>
                </div>
            </div>
        </Container>
    </Hero>
  )

}

export default Heropage