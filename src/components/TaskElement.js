/* eslint-disable unicorn/filename-case */
import React from 'react'
import CheckBox from './CheckBox'

const TaskElement = ({ task, handleElementClick }) => {
  const { id, todoText, isCompleted } = task

  return (
    <div id={id} onClick={() => handleElementClick(id)}>
      <CheckBox checked={isCompleted} onChange={() => handleElementClick(id)}/>
      <span>{todoText}</span>
    </div>
  )
}

export default TaskElement
