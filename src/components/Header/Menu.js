import React, {useState} from 'react';

import { Data} from './Data'

import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import SubMenu from './SubMenu';

export const Container = styled.div`
  height: 60px;
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const Icon = styled.div`
    cursor: pointer;
    font-size: 25px;
`

const Lateral = styled.div`
    position: fixed;
    top: 0;
    left: ${({menu}) => (menu ? '0' : '-100%')};
    height: 100vh;
    width: 300px;
    background-color: #111;
    color: #fff;
    padding: 5px 10px;
    transition: ease-in 0.6s;
`

function Menu() {
    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

  return (
      <>
      <Container>
        <Icon>
             <FaBars onClick={showMenu}/>
        </Icon>
      </Container>
      <Lateral menu = {menu}>
          <Icon>
              <AiOutlineClose onClick={showMenu} />
          </Icon>
          {
              Data.map((item, index) => {
                  return <SubMenu item={item} key={index} />
              })
          }
      </Lateral>
      </>
  );
}

export default Menu;
