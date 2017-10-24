import React, { Component } from 'react'
import '../less/App.css'

import { Provider } from 'react-redux'

import Root from './components/Root'

import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
