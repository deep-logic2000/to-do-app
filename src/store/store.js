import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/task-slice'
import filterReducer from './slices/filter-slice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
})