/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskElement from './TaskElement'
import { toggleCompleteTask } from '../store/slices/task-slice'

import { filters } from '../constants'

const TodoTasks = () => {
  const allTasks = useSelector((state) => state.tasks)
  const currentFilter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleElementClick = (id) => {
    dispatch(toggleCompleteTask(id))
  }

  const getFilteredTasks = () => {
    switch (currentFilter) {
      case filters.ALL: {
        return allTasks
      }
      case filters.COMPLETED: {
        return allTasks.filter((task) => task.isCompleted)
      }
      case filters.NOT_COMPLETED: {
        return allTasks.filter((task) => !task.isCompleted)
      }
      default: {
        return allTasks
      }
    }
  }

  return (
    <div>
      {getFilteredTasks().length > 0 && getFilteredTasks().map((task) => (
        <TaskElement
          task={task}
          key={task.id}
          handleElementClick={handleElementClick}/>
      ))}
    </div>
  )
}

export default TodoTasks
