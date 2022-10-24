import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    
   
`

export const Item = styled.li`
    width: 200px;
    background-color: #f5f4fa;;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    margin-bottom: 20px;
    
`
export const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
`

export const Text = styled.p`
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    padding-bottom: 16px;
`