import React, { useContext } from 'react'
import { CounterContext } from '.'

const Details = () => {
  const { state } = useContext(CounterContext)
  return (
    <div className="mb-4">
      <h2>The Count is {state.count}</h2>
    </div>
  )
}

export default Details
