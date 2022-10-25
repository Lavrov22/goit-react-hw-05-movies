import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 15px;
    font-size: 20px;
    font-weight: bold;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
    border-radius: 4px;
    width: 120px;
    :hover, :focus{
        color: rgb(24, 140, 232);
    }
    
`
