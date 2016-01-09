import React from 'react'
import App from './components/App'
import LoggingService from './LoggingService'

window.onload = () => {
  LoggingService.enableLogging()
  React.render(<App/>, document.body)
}