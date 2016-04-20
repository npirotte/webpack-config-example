// file : /src/app.js

/**
 * This is our application entry point
 */
import * as React from 'react'
import {render} from 'react-dom'

import App from './components/App.jsx'

const el = document.getElementById('app')

if (!el) {
  throw new Error('No element #app provided')
}

render(React.createElement(App), el)
