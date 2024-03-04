/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useSelector } from 'react-redux'

const TodoTasks = () => {
  const allTasks = useSelector((state) => state.tasks)

  return (
    <div>
      {allTasks.length > 0 && allTasks.map((task) => (
        <div key={task.id}>{task.todoText}</div>
      ))}
    </div>
  )
}

export default TodoTasks
