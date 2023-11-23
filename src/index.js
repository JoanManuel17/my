import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { HandleRoutes } from './routes/HandleRoutes'
import { UserProvider } from './context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
        <HandleRoutes/>
    </BrowserRouter>
  </UserProvider>
)