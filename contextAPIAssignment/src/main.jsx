import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import ContextAPIApp from './ContextAPIApp.jsx'

export const mainContext=createContext()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPIApp />
  </React.StrictMode>,
)
