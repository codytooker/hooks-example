import React, { useContext } from 'react'
import { CounterContext } from '.'
import Button from '../../ui/Button'

const Controls = () => {
  const { dispatch } = useContext(CounterContext)
  return (
    <div>
      <Button type="button" onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </Button>
      <Button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </Button>
      <Button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </Button>
    </div>
  )
}

export default Controls
