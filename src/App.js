/* eslint-disable unicorn/filename-case */
import './app.scss'
import Header from './components/Header'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  )
}

export default App
