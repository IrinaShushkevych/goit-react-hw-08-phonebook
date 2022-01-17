import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'
import './index.css'
import App from './App'
import { persistedStore, store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loader={null} persistor={persistedStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
