import { createSlice } from '@reduxjs/toolkit'
import { filters } from '../../constants'

const filterSlice = createSlice({
  name: 'filter',
  initialState: filters.ALL,
  reducers: {
    setFilter: (state, action) => {
      return action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer
