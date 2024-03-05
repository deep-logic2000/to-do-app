/* eslint-disable unicorn/filename-case */
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskElement from './TaskEement'
import { toggleCompletedTask, deleteTask } from '../store/slices/task-slice'
import { filters } from '../constants'

import Box from '@mui/material/Box'

const TodoTasks = () => {
  const allTasks = useSelector((state) => state.tasks)
  const currentFilter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleElementClick = useCallback((id) => {
    dispatch(toggleCompletedTask(id))
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
        return allTasks.filter((task) => {
          return task.isCompleted === false
        })
      }
      case filters.IN_PROGRESS: {
        return allTasks.filter((task) => {
          return task.isInProgress === true
        })
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
