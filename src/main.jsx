import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './Context/index.jsx'
import WeatherCard from './Components/WeatherCard.jsx'
import Weather from './Components/weather.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/weather" element={<Weather/>} />
        </Routes>
      </Router>
    </StateContextProvider>
  </React.StrictMode>,
)