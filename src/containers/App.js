import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const style = StyleSheet.create({
  root: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  version: {
    fontSize: 11,
    color: 'white',
  },
})

class App extends Component {

  render() {
    return (
      <View style={style.root}>
        <Text style={style.title}>PlaceSpace</Text>
        <Text style={style.version}>0.0.1</Text>
      </View>
    )
  }
}

export default App
