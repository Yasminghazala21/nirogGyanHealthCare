import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  background: #2b72f0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 18px;
`

const Title = styled.div`
  font-weight: bold;
`

const Header = () => {
  return (
    <Nav>
      <Title><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>NirogGyan</Link></Title>
    </Nav>
  )
}

export default Header
