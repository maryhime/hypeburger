import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { PAGES } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/images/background.svg')] h-fit w-full bg-no-repeat bg-cover">
      {PAGES.map((value, index) => value.component)}
    </div>

  </React.StrictMode>,
)
