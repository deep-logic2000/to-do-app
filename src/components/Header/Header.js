/* eslint-disable unicorn/filename-case */
/* eslint-disable id-length */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/task-slice'

import FilteredButtonsGroup from '../FilteredButtonsGroup'
import Counter from '../Counter/Counter'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { MAX_TODO_LENGTH } from '../../constants'
import './index.scss'
import { Typography } from '@mui/material'

const Header = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputErrorMessage, setInputErrorMessage] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value.length > MAX_TODO_LENGTH) {
      setInputErrorMessage(`The name
             should be less than ${MAX_TODO_LENGTH} symbols long!`)
    } else {
      setInputErrorMessage('')
    }
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.length <= MAX_TODO_LENGTH) {
      dispatch(addTask(inputValue))
      setInputValue('')
    }
  }

  return (
    <Box
      component='header'
      sx={{ borderBottom: '1px solid grey' }}
      p={0}
    >
      <Box display={'flex'}
           justifyContent={'center'}>
        <Typography variant='h3' component='h1' m={3}>
          Todo App
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'stretch'}
        alignItems={'center'}
        gap={2}
        sx={{
          height: '80px',
        }}
      >
        <Box
          component='form'
          sx={{
            width: '100%',
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-controlled'
            label='Enter the task'
            variant='outlined'
            error={inputErrorMessage.length > 0}
            helperText={inputErrorMessage}
            fullWidth
            value={inputValue}
            onChange={handleChange}
          />
        </Box>
        <Button
          onClick={handleAddTask}
          variant='contained'
          size='small'
          color='success'>
          Add Todo
        </Button>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <div className='filter-btns-wrapper'>
          <FilteredButtonsGroup />
        </div>
        <Box className='counter-wrapper'>
          <Counter />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
