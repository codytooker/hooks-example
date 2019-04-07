import React, { useReducer, useEffect } from 'react'

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

const initialTodos = JSON.parse(window.localStorage.getItem('hookTodos')) || []

const HookTodos = ({ todos, addTodo, removeTodo }) => {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos })

  useEffect(() => {
    window.localStorage.setItem('hookTodos', JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <Page>
      <Container>
        <Title>HOC Todo's</Title>
        <Todos
          todos={state.todos}
          addTodo={(todo) => dispatch({ type: 'add', payload: todo })}
          removeTodo={(index) => dispatch({ type: 'remove', payload: index })}
        />
      </Container>
    </Page>
  )
}

export default HookTodos
