import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import NavbarComponent from './components/NavbarComponent'
import HomePage from './page/HomePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/images/background.svg')] h-fit w-full bg-no-repeat bg-cover">
      <NavbarComponent />
      <HomePage />
    

    </div>

  </React.StrictMode>,
)
