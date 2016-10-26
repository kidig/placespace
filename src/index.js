import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

class PlaceSpace extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}

AppRegistry.registerComponent('PlaceSpace', () => PlaceSpace)
