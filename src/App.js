/* eslint-disable unicorn/filename-case */
import './app.scss'
import Header from './components/Header'
import TaskSection from './components/TasksSection'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <TaskSection />
      </div>
    </Provider>
  )
}

export default App
