import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import * as todosApi from '../../../utils/fetch'

let stats = {
  withMemo: 0,
  withoutMemo: 0,
}

const HookTodosAsync = (userId = 984) => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastChanged, setLastChanged] = useState(0)
  const [unrelatedState, setUnrelatedState] = useState(0)

  const addTodo = useCallback(
    (todo) => {
      setIsLoading(true)
      todosApi
        .addTodo(userId, 'hook', todo)
        .then(() => setLastChanged(Date.now()))
    },
    [userId]
  )

  const removeTodo = useCallback(
    (i) => {
      todosApi
        .removeTodo(userId, 'hook', i)
        .then(() => setLastChanged(Date.now()))
    },
    [userId]
  )

  useEffect(() => {
    setIsLoading(true)
    todosApi.fetchTodos(userId, 'hook').then((todos) => {
      setTodos(todos)
      setIsLoading(false)
    })
  }, [userId, lastChanged])

  // expensive calculations can be memoized so they're only run when necessary
  const urgentTodos = useMemo(() => {
    stats.withMemo = stats.withMemo + 1
    return todos.filter((todo) => {
      return /urgent/i.test(todo)
    }).length
  }, [todos])

  const urgentTodosNotMemoized = (function() {
    stats.withoutMemo = stats.withoutMemo + 1
    return todos.filter((todo) => {
      return /urgent/i.test(todo)
    }).length
  })()

  console.log(stats)

  return (
    <Page>
      <Container>
        <Title>Hooks Async Todos</Title>
        <button
          className="bg-blue-lighter border border-blue-darker text-blue-darker p-2 mb-2 rounded"
          onClick={() => setUnrelatedState(Date.now())}
        >
          Unrelated state change
        </button>
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
