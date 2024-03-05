import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, todoText: 'Task 1', isCompleted: false },
  { id: 2, todoText: 'Task 2', isCompleted: true },
  { id: 3, todoText: 'Task 3', isCompleted: false },
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
      }
      state.push(newTodo)
    },
    toggleCompleteTask: (state, action) => {
      const completedTask = state.find((task) => task.id === action.payload)
      completedTask.isCompleted = !completedTask.isCompleted
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addTask, toggleCompleteTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
