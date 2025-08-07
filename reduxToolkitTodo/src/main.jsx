import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import {store} from './app/store'

// Save state to localStorage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reduxState', serializedState)
  } catch (e) {
   console.log(e)
  }
}

// Optionally, you can use loadState() when creating the store in store.js
// const store = configureStore({ reducer, preloadedState: loadState() })

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState())
})
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
