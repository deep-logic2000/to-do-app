/* eslint-disable unicorn/filename-case */
import React from 'react'
import CheckBox from './CheckBox'
// eslint-disable-next-line max-len
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const TaskElement = ({ task, handleElementClick, handleTaskDelete }) => {
  const { id, todoText, isCompleted } = task

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      sx={{ bgcolor: '#cfe8fc', height: '30px' }}
      mb={1}
      p={1}
      >
      <Box
          id={id}
          onClick={() => handleElementClick(id)}
          display={'flex'}
          alignItems={'center'}>
        <CheckBox
          checked={isCompleted}
          onChange={() => handleElementClick(id)}
        />
        <Typography component="span" sx={{ '&:hover': { cursor: 'pointer' } }}
          >{todoText}</Typography>
      </Box>
      <IconButton
        aria-label="delete"
        color='error'
        onClick={() => handleTaskDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default TaskElement
