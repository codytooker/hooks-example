import React, { useState, memo } from 'react'
import Button from '../Button'

const Todos = memo(({ todos, addTodo, removeTodo, isLoading }) => {
  const [newTodo, updateNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newTodo) return

    addTodo(newTodo)
    updateNewTodo('')
  }

  console.log('new todos render')

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
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="mr-4 px-3"
          value={newTodo}
          onChange={(e) => updateNewTodo(e.target.value)}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  )
})

export default Todos
