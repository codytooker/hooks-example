import React, { Component } from 'react'
import isEqual from 'lodash/isEqual'

import { Page, Container, Title } from '../../ui/layout'
import Todos from '../../ui/Todos'

class ClassBased extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    const todos = JSON.parse(window.localStorage.getItem('classBased')) || []

    this.setState({ todos })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.state.todos, prevState.todos))
      window.localStorage.setItem(
        'classBased',
        JSON.stringify(this.state.todos)
      )
  }

  handleSubmit = (newTodo) => {
    const { todos } = this.state

    this.setState({
      todos: [...todos, newTodo],
    })
  }

  removeTodo = (i) => {
    const { todos } = this.state

    this.setState({
      todos: [...todos.slice(0, i), ...todos.slice(i + 1)],
    })
  }

  render() {
    const { todos } = this.state

    return (
      <Page>
        <Container>
          <Title>Class Based Todo's</Title>
          <Todos
            todos={todos}
            addTodo={this.handleSubmit}
            removeTodo={this.removeTodo}
          />
        </Container>
      </Page>
    )
  }
}

export default ClassBased
