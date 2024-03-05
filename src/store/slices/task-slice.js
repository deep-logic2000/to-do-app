import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utils/local-storage'

const initialState = [
  {
    id: 1,
    todoText: 'Do this task',
    isCompleted: false,
    inProgress: false,
  },
  {
    id: 2,
    todoText: 'Second task',
    isCompleted: false,
    inProgress: false,
  },
  {
    id: 3,
    todoText: 'Third task',
    isCompleted: false,
    isInProgress: false,
  },
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        todoText: action.payload,
        isCompleted: false,
        isInProgress: false,
      }
      state.push(newTodo)
      setLocalStorage('MY_APP_STATE', state)
    },
    toggleCompletedTask: (state, action) => {
      const completedTask = state.find((task) => task.id === action.payload)
      if (!completedTask.isCompleted) {
        completedTask.isInProgress = false
      }
      completedTask.isCompleted = !completedTask.isCompleted
      setLocalStorage('MY_APP_STATE', state)
    },
    toggleProgressTask: (state, action) => {
      const taskToChangeProgress = state.find((task) => {
        return task.id === action.payload
      })
      taskToChangeProgress.isInProgress = !taskToChangeProgress.isInProgress
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
  addTask, toggleCompletedTask, toggleProgressTask, deleteTask, setTasks,
} = taskSlice.actions

export default taskSlice.reducer
