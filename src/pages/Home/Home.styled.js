import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    color: black;
     transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    :hover, :focus{
        color: rgb(24, 140, 232);
    }
    
    
`

export const Item = styled.li`
     margin-bottom: 10px;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 20px;
    margin: 0;
`