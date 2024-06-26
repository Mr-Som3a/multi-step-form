import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './contextProvider.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
  </React.StrictMode>,
)
