import { useState, useEffect } from 'react'

import removeAtIndex from '../utils/removeAtIndex'

export default (key) => {
  const [arr, setArr] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || []
  )

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(arr))
  }, [arr])

  const add = (item) => {
    setArr([...arr, item])
  }

  const remove = (index) => {
    setArr(removeAtIndex(arr, index))
  }

  return [arr, add, remove]
}
