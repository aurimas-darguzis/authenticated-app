import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { FirebaseContext } from './context/firebase'
import { firebase } from './lib/firebase.prod'

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
