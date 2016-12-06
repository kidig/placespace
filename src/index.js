import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
}

class PlaceSpace extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}


AppRegistry.registerComponent('PlaceSpace', () => codePush(codePushOptions)(PlaceSpace))
