import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './Context/index.jsx'
import NewCompo from './Components/NewCompo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/weather" element={<NewCompo/>} />
        </Routes>
      </Router>
    </StateContextProvider>
  </React.StrictMode>,
)