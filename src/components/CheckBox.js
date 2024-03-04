/* eslint-disable unicorn/filename-case */
import React from 'react'
import { Checkbox } from '@mui/material'

const CheckBox = ({ checked }) => {
  return (
    <Checkbox
      checked={checked}
      inputProps={{ 'aria-label': 'controlled' }}
      color="primary"
    />
  )
}

export default CheckBox
