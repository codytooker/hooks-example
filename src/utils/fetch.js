import removeAtIndex from './removeAtIndex'

export const fetchTodos = (userId, type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const raw = window.localStorage.getItem(`${type}Todos`)
      if (raw) resolve(JSON.parse(raw))
      else {
        window.localStorage.setItem(`${type}Todos`, JSON.stringify([]))
        resolve([])
      }
    }, 150)
  })
}

export const addTodo = (userId, type, todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTodos = JSON.parse(
        window.localStorage.getItem(`${type}Todos`)
      )
      window.localStorage.setItem(
        `${type}Todos`,
        JSON.stringify([...currentTodos, todo])
      )
      resolve()
    }, 150)
  })
}

export const removeTodo = (userId, type, indexToDelete) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTodos = JSON.parse(
        window.localStorage.getItem(`${type}Todos`)
      )
      window.localStorage.setItem(
        `${type}Todos`,
        JSON.stringify(removeAtIndex(currentTodos, indexToDelete))
      )
      resolve()
    }, 150)
  })
}
