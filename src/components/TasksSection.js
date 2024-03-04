/* eslint-disable unicorn/filename-case */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TodoTasks = () => {
  const allTasks = useSelector(({ tasks }) => tasks.tasks)

  return (
    <div>
      {allTasks.length > 0 && allTasks.map((task) => (
        <div key={task.id}>{task.todoText}</div>
      ))}
    </div>
  )
}

export default TodoTasks
