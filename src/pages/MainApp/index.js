import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const MainApp = () => {
  return (
    <div>
        <p>Header</p>
        <Router></Router>
        <p>Footer</p>
    </div>
  )
}

export default MainApp