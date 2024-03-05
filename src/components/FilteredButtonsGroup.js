/* eslint-disable unicorn/filename-case */
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../store/slices/filter-slice'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

import { filters } from '../constants'

export default function SplitButton() {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const options = [
    filters.ALL,
    filters.COMPLETED,
    filters.NOT_COMPLETED,
    filters.IN_PROGRESS,
  ]

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index)
    setOpen(false)
    dispatch(setFilter(option))
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="select filter"
        color="secondary"
      >
        <Button>{filter}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select filter"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={
                        (event) => handleMenuItemClick(event, index, option)
                    }
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}