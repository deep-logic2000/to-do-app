/* eslint-disable unicorn/filename-case */
import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Typography } from '@mui/material'

const Counter = () => {
  const allTasks = useSelector((state) => state.tasks)

  const getAmountOfCompletedTasks = () => {
    return allTasks.filter((task) => task.isCompleted).length
  }

  return (
    <Container>
        <Typography variant="h1" component="h2">
            Completed tasks: {getAmountOfCompletedTasks()}
        </Typography>
        <Typography variant="h1" component="h2">
            Uncompleted tasks: {allTasks.length - getAmountOfCompletedTasks()}
        </Typography>
    </Container>
  )
}

export default Counter
