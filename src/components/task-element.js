import React from 'react'
import CheckBox from './check-box'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Typography } from '@mui/material'
import Select from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { toggleProgressTask } from '../store/slices/task-slice'

import { progressStatus } from '../constants'

const TaskElement = ({ task, handleElementClick, handleTaskDelete }) => {
  const { id, todoText, isCompleted, isInProgress } = task
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(toggleProgressTask(id))
  }

  const getNameOfStatus = () => {
    if (isInProgress) {
      return 'IN PROGRESS'
    }
    return 'NOT IN PROGRESS'
  }

  const getBackgroundColor = () => {
    if (isCompleted) {
      return '#caccca'
    }
    if (isInProgress) {
      return '#98ff75'
    }
    return '#cfe8fc'
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      sx={{ bgcolor: getBackgroundColor(), height: '30px' }}
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
        <Typography
          component="span"
          sx={{
            '&:hover': { cursor: 'pointer' },
            textDecoration: isCompleted ? 'line-through' : 'none',
          }}
          >{todoText}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        {!isCompleted && <Box sx={{ width: 190 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={getNameOfStatus()}
              onChange={handleChange}
              sx={{ height: 30 }}
            >
              <MenuItem
                value={progressStatus.IN_PROGRESS}>
                IN PROGRESS
              </MenuItem>
              <MenuItem value={progressStatus.NOT_IN_PROGRESS}>
                NOT IN PROGRESS
              </MenuItem>
            </Select>
          </FormControl>
        </Box>}
      <IconButton
        aria-label="delete"
        color='error'
        onClick={() => handleTaskDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
      </Box>
    </Box>
  )
}

export default TaskElement
