import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 10px 4px;
    font-size: 1.3rem;
    text-decoration: none;

    &:hover{
        background-color: red;
    }
`;

const Span = styled.span`
    margin-left: 10px;
`

const SubLink = styled(Link)`
    display: flex;
    align-items: center;
    list-style: none;
    text-decoration: none;
    color: #fff;
    padding: 10px 4px;
    font-size: 1.3rem;

    &:hover{
        background-color: yellow;
        color: #111;
    }
`


function SubMenu({ item }) {
    const [navbar, setNavbar] = useState(false)
    const showSubnav = () => setNavbar(!navbar)
    return (
        <>
            <Container to={item.path} onClick={item.submenu && showSubnav}>
                <div>
                    {item.icon}
                    <Span>{item.title}</Span>
                </div>
                <div>
                    {item.submenu && navbar
                        ? item.iconOpened
                        : item.submenu
                        ? item.iconClosed
                        : null
                    }
                </div>
            </Container>
           {
               navbar && item.submenu.map((item, index) => {
                   return(
                       <SubLink to={item.path} key={index}>
                           {item.title}
                       </SubLink>
                   )
               })
           }

        </>
    );
}

export default SubMenu;