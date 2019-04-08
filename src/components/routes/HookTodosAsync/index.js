import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import * as todosApi from '../../../utils/fetch'

const HookTodosAsync = (userId = 984) => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(0)

  const addTodo = useCallback(
    (todo) => {
      setIsLoading(true)
      todosApi.addTodo(userId, 'hook', todo).then(() => {
        setLastUpdated(Date.now())
      })
    },
    [userId]
  )

  const removeTodo = useCallback(
    (i) => {
      todosApi.removeTodo(userId, 'hook', i).then(() => {
        setLastUpdated(Date.now())
      })
    },
    [userId]
  )

  useEffect(() => {
    setIsLoading(true)
    todosApi.fetchTodos(userId, 'hook').then((todos) => {
      setTodos(todos)
      setIsLoading(false)
    })
  }, [userId, lastUpdated])

  // expensive calculations can be memoized so they're only run when necessary
  const urgentTodos = useMemo(
    () =>
      todos.filter((todo) => {
        console.log('running urgentTodos memoized')
        return /urgent/i.test(todo)
      }).length,
    [lastUpdated]
  )

  const urgentTodosNotMemoized = todos.filter((todo) => {
    console.log('running urgentTodos without memo')
    return /urgent/i.test(todo)
  }).length

  return (
    <Page>
      <Container>
        <Title>Hooks Async Todos</Title>
        <p className="red">
          <strong>URGENT TODOS: </strong>
          {urgentTodos}
        </p>
        <Todos
          isLoading={isLoading}
          todos={todos}
          addTodo={addTodo}
          removeTodo={removeTodo}
        />
      </Container>
    </Page>
  )
}

export default HookTodosAsync
