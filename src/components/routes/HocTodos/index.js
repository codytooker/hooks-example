import React from 'react'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'
import withLocalStorageArray from '../../../hocs/withLocalStorageArray'

const HocTodos = ({ todos, addTodo, removeTodo }) => {
  return (
    <Page>
      <Container>
        <Title>HOC Todo's</Title>
        <Todos todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </Container>
    </Page>
  )
}

export default withLocalStorageArray(HocTodos, 'classBasedHoc')
