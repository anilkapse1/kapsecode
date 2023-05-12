import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import RoofingIcon from '@mui/icons-material/Roofing';
import { IconButton } from '@mui/material'





const Header = () => {
    const Menu=styled.header`
    margin-bottom:40px;

    .header_title{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:10px;
            h1{
                margin-bottom:0px;
                color:${({theme})=>theme.colors.color1};
            }
            button{
                order:-1;
            }
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
                            border-bottom:1px solid rgb(105, 90, 166);
                            color:${({theme})=>theme.colors.color1};

                        }
                        &.active{
                            border-bottom:1px solid rgb(105, 90, 166);
                            color:${({theme})=>theme.colors.color1};

                        }

                    }
                }
            }
        }
    `


    const navigate = useNavigate();



  return (
    <Menu>
        <div className='header_title'>
            <h1>Project List</h1>
            <IconButton style={{color:'#695AA6'}}  aria-label="delete" size="large">
                <RoofingIcon onClick={()=>navigate('/kapsecode')}/>
            </IconButton>
        </div>
        <nav>
            <ul>
                <li><NavLink to="react">React</NavLink></li>
                <li><NavLink to="website">website</NavLink></li>
                <li><NavLink to="javascript">JavaScript</NavLink></li>
                <li><NavLink to="mern">MERN Stack</NavLink></li>
                <li><NavLink to="certification">Certification</NavLink></li>
                <li><NavLink to="aboutme">Me</NavLink></li>
            </ul>
        </nav>
    </Menu>
  )
}

export default Header