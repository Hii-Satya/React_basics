import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

function loadState() {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

export const store = configureStore({
    reducer :todoReducer,
      preloadedState: loadState(),

})