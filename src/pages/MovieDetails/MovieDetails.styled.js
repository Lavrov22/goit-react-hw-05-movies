import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid black;
    padding-bottom: 16px;
`


export const Img = styled.img`
    display: inline-block;
    width: 300px;
    height: 400px;
`
export const Item = styled.li`
     list-style: none;
     margin-bottom: 10px;
`

export const List = styled.ul`
    display: flex;
    gap: 10px;
    padding: 0;
    margin: 0;
    margin-top: 20px;
`

export const InformWrapper = styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 16px;
`

export const InformList = styled.ul`
    padding: 0;
    padding-left: 20px;
    margin: 0;
`
export const InformItem = styled.li`
     list-style: none;
     margin-bottom: 10px;
`

export const InformLink = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    :hover, :focus{
        color: rgb(24, 140, 232);
    }
    
`