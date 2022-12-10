import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css'
import MoviesProvider from "./components/MoviesProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter><MoviesProvider><App /></MoviesProvider></BrowserRouter>
  </React.StrictMode>
)
