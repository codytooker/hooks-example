import React from 'react'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import useLocalStorageArray from '../../../hooks/useLocalStorageArray'

const CustomHookTodos = () => {
  const [todos, addTodo, removeTodo] = useLocalStorageArray('customHook')

  return (
    <Page>
      <Container>
        <Title>HOC Todo's</Title>
        <Todos todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </Container>
    </Page>
  )
}

export default CustomHookTodos
