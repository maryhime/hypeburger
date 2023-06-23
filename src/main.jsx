import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { PAGES } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/images/background.svg')] h-fit w-full bg-no-repeat bg-cover">
      {PAGES.map((value, index) => <Fragment key={index}>
        {value.component}
      </Fragment>)}
    </div>

  </React.StrictMode>,
)
