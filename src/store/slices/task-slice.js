import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id: 1, todoText: 'Task 1', completed: false },
    { id: 2, todoText: 'Task 2', completed: true },
    { id: 3, todoText: 'Task 3', completed: false },
  ],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getAllTasks: (state) => state.tasks,
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        newTask: action.payload,
        completed: false,
      }
      state.push(newTodo)
    },
    toggleCompleteTask: (state, action) => {
      const completedTask = state.find((task) => task.id === action.payload)
      if (completedTask) {
        completedTask.completed = !completedTask.completed
      }
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