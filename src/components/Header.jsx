
import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import reactLogo from "../assets/react.svg"
import Image from "react-bootstrap/Image"

const Header = () => {
  return (
   <Container>
    <Image fluid src={reactLogo} width="250px"></Image>
   </Container>
    )
}

export default Header;
