import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'




const Header = () => {
    const Menu=styled.header`
    h1{
        margin-bottom:20px;
        color:${({theme})=>theme.colors.color2};
    }
        nav{
            ul{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                gap:10px;
                li{
                    list-style-type:none;
                    text-transform: capitalize;
                    a{
                        display: block;
                        padding: 10px 15px;
                        font-size: 1.2vw;
                        border:1px solid transparent;
                        font-family: 'Poppins', sans-serif;
                        letter-spacing:1px;
                        border:1px solid white;
                        font-weight: 400;
                        &:hover{
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                            border:1px solid white;
                            border-radius:5px;
                            color:${({theme})=>theme.colors.color1};

                        }
                        &.active{
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                            border-radius:5px;
                            border:1px solid transparent;
                            color:${({theme})=>theme.colors.color1};

                        }

                    }
                }
            }
        }
    `
  return (
    <Menu>
        <h1>Project List</h1>
        <nav>
            <ul>
                <li><NavLink to="react">React</NavLink></li>
                <li><NavLink to="website">website</NavLink></li>
                <li><NavLink to="javascript">JavaScript</NavLink></li>
                <li><NavLink to="mern">MERN Stack</NavLink></li>
                <li><NavLink to="certification">Certification</NavLink></li>
            </ul>
        </nav>
    </Menu>
  )
}

export default Header