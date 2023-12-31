import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="Header.css" />
const Header = () => {
  return <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} blur={0.5}>
    <Button variant={"unstyled"} color={"white"}>
      <Link to="/">
      Home
      </Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
      <Link to="/Exchanges">
      Exchanges
      </Link>
    </Button><Button variant={"unstyled"} color={"white"}>
      <Link to="/coins">
      coins
      </Link>
    </Button>
  </HStack>
}

export default Header