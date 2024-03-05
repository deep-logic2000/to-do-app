/* eslint-disable unicorn/filename-case */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/task-slice'

import FilteredButtonsGroup from '../FilteredButtonsGroup'
import Counter from '../Counter/Counter'

import { MAX_TODO_LENGTH } from '../../constants'
import './index.scss'

const Header = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputErrorMessage, setInputErrorMessage] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value.length > MAX_TODO_LENGTH) {
      setInputErrorMessage(`The name
             should be less than ${MAX_TODO_LENGTH} symbols long!`)
    } else {
      setInputErrorMessage('')
    }
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.length < MAX_TODO_LENGTH) {
      dispatch(addTask(inputValue))
      setInputValue('')
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          placeholder='Enter the task'
        />
        {inputErrorMessage && (
          <div className='error-text'>{inputErrorMessage}</div>
        )}
      </div>
      <button onClick={handleAddTask}>Add Todo</button>
      <div className='filter-btns-wrapper'>
        <FilteredButtonsGroup />
      </div>
      <div className='counter-wrapper'>
        <Counter />
      </div>
    </div>
  )
}

export default Header
