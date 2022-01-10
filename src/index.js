import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'modern-normalize'
import './index.css'
import App from './App'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
