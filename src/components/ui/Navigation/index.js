import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../ui/layout'

const Navigation = () => {
  return (
    <NavContainer>
      <Container>
        <StyledLink to="/class">Class</StyledLink>
        <StyledLink to="/class-hoc">HOC</StyledLink>
        <StyledLink to="/hoc-async">Recompose</StyledLink>
        <StyledLink to="/hooks">Hooks</StyledLink>
        <StyledLink to="/hooks-async">Hooks Async</StyledLink>
        <StyledLink to="/hooks-custom">Custom Hooks</StyledLink>
      </Container>
    </NavContainer>
  )
}

export default Navigation

const NavContainer = ({ children }) => (
  <div className="border-b border-grey-light py-3">{children}</div>
)

const StyledLink = ({ children, ...props }) => (
  <Link {...props} className="no-underline text-grey-darker mr-4">
    {children}
  </Link>
)
