import React from 'react'
import {
  withState,
  compose,
  withHandlers,
  withProps,
  lifecycle,
} from 'recompose'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import * as todosApi from '../../../utils/fetch'

const HocTodosAsync = ({
  todos,
  urgentTodos,
  setUnrelatedState,
  isLoading,
  addTodo,
  removeTodo,
}) => (
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

export default compose(
  withProps({
    userId: 830,
  }),
  withState('unrelatedState', 'setUnrelatedState', 0),
  withState('todos', 'setTodos', []),
  withState('isLoading', 'setIsLoading', false),
  withHandlers(({ userId, setIsLoading, setTodos }) => ({
    fetchTodos: () => () => {
      setIsLoading(true)
      todosApi.fetchTodos(userId, 'hocAsync').then((todos) => {
        setTodos(todos)
        setIsLoading(false)
      })
    },
  })),
  withHandlers(({ fetchTodos, userId }) => ({
    addTodo: () => (todo) =>
      todosApi.addTodo(userId, 'hocAsync', todo).then(fetchTodos),
    removeTodo: () => (i) =>
      todosApi.removeTodo(userId, 'hocAsync', i).then(fetchTodos),
  })),
  lifecycle({
    componentDidMount() {
      this.props.fetchTodos()
    },
    componentWillUpdate(nextProps) {
      if (this.props.userId !== nextProps.userId) {
        this.props.fetchTodos()
      }
    },
  }),
  withProps(({ todos }) => {
    console.log('computing urgentTodos')
    return {
      urgentTodos: todos.filter((t) => /urgent/i.test(t)).length,
    }
  })
)(HocTodosAsync)
