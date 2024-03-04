/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskElement from './TaskElement'
import { toggleCompleteTask } from '../store/slices/task-slice'

const TodoTasks = () => {
  const allTasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleElementClick = (id) => {
    dispatch(toggleCompleteTask(id))
  }

  return (
    <div>
      {allTasks.length > 0 && allTasks.map((task) => (
        <TaskElement
          task={task}
          key={task.id}
          handleElementClick={handleElementClick}/>
      ))}
    </div>
  )
}

export default TodoTasks
