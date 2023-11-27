import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UsersApp } from './UsersApp.jsx'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
)
