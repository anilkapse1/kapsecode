import React, { useState } from 'react'
import Heropage from '../pages/Heropage'
import Heropage1 from '../pages/Heropage1'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from 'styled-components';


const Heroselection = () => {
    const CustomTheme = styled.div`
        position:absolute;
        right:0px;
    
    `

    const [theme, setTheme] = useState({
        themeName:'theme1'
    })

    const changeTheme=(event)=>{
        const {name, value} = event.target;
        setTheme((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })
    }





  return (
    <>
        <CustomTheme>
            <FormControl>
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                    <FormControlLabel value="theme1" name="themeName" checked={theme.themeName==='theme1'} onChange={changeTheme} control={<Radio />} label="Theme1" />
                    <FormControlLabel value="theme2" name="themeName" checked={theme.themeName==='theme2'} onChange={changeTheme} control={<Radio />} label="Theme2" />
                </RadioGroup>
            </FormControl>
        </CustomTheme>

        {
            theme.themeName==="theme1"?<Heropage/>:<Heropage1/>
        }
    </>
  )
}

export default Heroselection