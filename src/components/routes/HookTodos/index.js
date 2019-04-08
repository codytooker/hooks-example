import React, { useReducer, useEffect, useState } from 'react'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import removeAtIndex from '../../../utils/removeAtIndex'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.payload],
      }

    case 'remove':
      return {
        todos: removeAtIndex(state.todos, action.payload),
      }

    default:
      return state
  }
}

const HookTodos = () => {
  const initialTodos =
    JSON.parse(window.localStorage.getItem('hookTodos')) || []
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos })

  useEffect(() => {
    window.localStorage.setItem('hookTodos', JSON.stringify(state.todos))
  }, [state.todos])

  const [unrelatedState, setUnrelatedState] = useState(0)

  const addTodo = (todo) => dispatch({ type: 'add', payload: todo })

  const removeTodo = (index) => dispatch({ type: 'remove', payload: index })

  return (
    <Page>
      <Container>
        <Title>Hooks Todos</Title>
        <button
          style={{
            backgroundColor: 'lightblue',
            border: '1px solid darkblue',
            color: 'darkblue',
            padding: '5px',
            borderRadius: '5px',
            margin: '0 0 10px',
          }}
          onClick={() => setUnrelatedState(Date.now())}
        >
          Unrelated state change
        </button>
        <Todos todos={state.todos} addTodo={addTodo} removeTodo={removeTodo} />
      </Container>
    </Page>
  )
}

export default HookTodos
