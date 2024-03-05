/* eslint-disable unicorn/filename-case */
import React, { useEffect } from 'react'
import Header from './components/Header/header'
import TaskSection from './components/TasksSection'
import { setTasks } from './store/slices/task-slice'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getLocalStorage } from './utils/local-storage'
import { StyledEngineProvider } from '@mui/material/styles'

import './app.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = getLocalStorage('MY_APP_STATE')
    if (data !== null && Array.isArray(data)) {
      dispatch(setTasks(data))
    }
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="md">
        <Header />
        <TaskSection />
      </Container>
    </StyledEngineProvider>
  )
}

export default App
