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
     list-style: none;
     margin-bottom: 10px;
`

export const List = styled.ul`
    padding: 0;
    padding-left: 20px;
    margin: 0;
    margin-top: 20px;
`

export const Button = styled.button`
    padding: 10px 32px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin-left: 10px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
     :hover, :focus{
        color: white;
        background-color: rgb(24, 140, 232);
    }
`

export const Input = styled.input`
    width: 300px;
    height: 29px;
    border: 1px solid;
    border-radius: 4px;
    font-weight: 500;
    :hover, :focus{
        border: 1px solid #188ce8;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    }
`
