import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import AppContainer from './screens/main'
export default class App extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
             <AppContainer />
      </TouchableWithoutFeedback>
      
    )
  }
}

