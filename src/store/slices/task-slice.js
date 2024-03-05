import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utils/local-storage'

const initialState = []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        todoText: action.payload,
        isCompleted: false,
      }
      state.push(newTodo)
      setLocalStorage('MY_APP_STATE', state)
    },
    toggleCompleteTask: (state, action) => {
      const completedTask = state.find((task) => task.id === action.payload)
      completedTask.isCompleted = !completedTask.isCompleted
      setLocalStorage('MY_APP_STATE', state)
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
      setLocalStorage('MY_APP_STATE', state)
    },
    setTasks: (state, action) => {
      return action.payload
    },
  },
})

export const {
  addTask, toggleCompleteTask, deleteTask, setTasks,
} = taskSlice.actions

export default taskSlice.reducer
