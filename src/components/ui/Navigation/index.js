import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../ui/layout'

const Navigation = () => {
  return (
    <NavContainer>
      <Container>
        <Link to="/class">Class Based</Link>
        <Link to="/class-hoc">HOC</Link>
      </Container>
    </NavContainer>
  )
}

export default Navigation

const NavContainer = ({ children }) => (
  <div className="border-b border-grey-light">{children}</div>
)
