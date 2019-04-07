import React, { Component } from 'react'
import isEqual from 'lodash/isEqual'

const withLocalStorageArray = (WrappedComponent, key) => {
  return class extends Component {
    state = {
      todos: [],
    }

    componentDidMount() {
      const todos = JSON.parse(window.localStorage.getItem(key)) || []

      this.setState({ todos })
    }

    componentDidUpdate(prevProps, prevState) {
      if (!isEqual(this.state.todos, prevState.todos))
        window.localStorage.setItem(key, JSON.stringify(this.state.todos))
    }

    addTodo = (newTodo) => {
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
      return (
        <WrappedComponent
          todos={this.state.todos}
          addTodo={this.addTodo}
          removeTodo={this.removeTodo}
          {...this.props}
        />
      )
    }
  }
}

export default withLocalStorageArray
