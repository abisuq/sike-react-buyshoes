import AppDispatcher from './AppDispatcher'

export default {
  enableLogging() {
    AppDispatcher.register((action) => {
      console.log(JSON.stringify({
        timestamp: new Date(),
        action
      }, undefined, 2))
    })
  }
}