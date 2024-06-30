import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import TestComponent from './TestComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main/>
  
  </React.StrictMode>,
)

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test2" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
