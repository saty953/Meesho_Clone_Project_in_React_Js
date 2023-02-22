import React from 'react'
// import '../styles/App.css';
import Navbar from './Navbar';
import { Menu } from './Menu';
import styled from 'styled-components';

const Container=styled.div`
position: sticky;
top: 0;
background-color: white;
z-index: 1000;
`;
const Header = () => {


  return (
    < Container>
<Navbar/>
<Menu/>
    </Container>
  )
}


export default Header;