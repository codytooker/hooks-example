import React, { useState } from 'react'

const Todos = ({ todos, addTodo, removeTodo, isLoading }) => {
  const [newTodo, updateNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newTodo) return

    addTodo(newTodo)
    updateNewTodo('')
  }

  return (
    <div className="border border-grey-light bg-grey-lighter rounded p-4 relative">
      {isLoading && (
        <>
          <div className="pin-t pin-l absolute w-full h-full opacity-25 bg-white text-xl font-semibold z-20" />
          <div className="pin-t pin-l absolute w-full h-full flex items-center justify-center text-xl font-semibold z-30">
            Loading...
          </div>
        </>
      )}
      {todos && (
        <div style={isLoading ? { filter: 'blur(5px)' } : {}}>
          {todos.map((todo, i) => (
            <div
              key={i}
              className="mb-2 border border-grey-dark bg-white p-2 rounded-sm flex justify-between z-10"
            >
              <span>{todo}</span>
              <span
                className="text-red text-sm cursor-pointer"
                onClick={() => removeTodo(i)}
              >
                remove
              </span>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => updateNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Todos
