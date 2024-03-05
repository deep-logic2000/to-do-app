/* eslint-disable unicorn/filename-case */
import './app.scss'
import Header from './components/Header/Header'
import TaskSection from './components/TasksSection'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <div>
          <Header />
          <TaskSection />
        </div>
      </Provider>
    </StyledEngineProvider>
  )
}

export default App
