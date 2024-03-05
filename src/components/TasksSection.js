/* eslint-disable unicorn/filename-case */
import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskElement from './TaskElement'
import { toggleCompleteTask, deleteTask } from '../store/slices/task-slice'

import Box from '@mui/material/Box'

import { filters } from '../constants'

const TodoTasks = () => {
  const allTasks = useSelector((state) => state.tasks)
  const currentFilter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleElementClick = useCallback((id) => {
    dispatch(toggleCompleteTask(id))
  }, [dispatch])

  const handleTaskDelete = useCallback((id) => {
    dispatch(deleteTask(id))
  }, [dispatch])

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
    <Box component="section">
      {getFilteredTasks().length > 0 ? getFilteredTasks().map((task) => (
        <TaskElement
          task={task}
          key={task.id}
          handleElementClick={handleElementClick}
          handleTaskDelete={handleTaskDelete}
        />)) : <div>No tasks available</div>
      }
    </Box>
  )
}

export default TodoTasks
