import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Burger from './Dars/burger/burger.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import "./style/css/_import.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
