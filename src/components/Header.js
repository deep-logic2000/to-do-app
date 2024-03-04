/* eslint-disable unicorn/filename-case */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/slices/task-slice'
// import { MAX_TODO_LENGTH } from '../constants'

const Header = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.length < 15) {
      dispatch(addTask(inputValue))
      setInputValue('')
    }
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
      <button onClick={handleAddTask}>Add Todo</button>
    </div>
  )
}

export default Header
