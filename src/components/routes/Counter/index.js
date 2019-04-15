import React, { useReducer, createContext } from 'react'
import { Page, Container, Title } from '../../ui/layout'
import Details from './Details'
import Controls from './Controls'

export const CounterContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }

    case 'reset':
      return { count: 0 }

    default:
      throw new Error()
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <Page>
      <Container>
        <Title>Counter useReducer, useContext</Title>
        <CounterContext.Provider value={{ state, dispatch }}>
          <Details />
          <Controls />
        </CounterContext.Provider>
      </Container>
    </Page>
  )
}

export default Counter
