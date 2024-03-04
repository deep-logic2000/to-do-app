/* eslint-disable unicorn/filename-case */
import React, { useState } from 'react'

const Header = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = () => {
    console.log('Adding todo:', inputValue)
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter the task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default Header