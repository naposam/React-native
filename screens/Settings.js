import React, { Component } from 'react'
import {Text, View, ImageBackground,Dimensions} from 'react-native'
const {height,width} = Dimensions.get('screen')
export default class Settings extends Component {

  
  render() {
    return (
           <View>
           <ImageBackground  source={require('./images/splash_second.png')} style={{height, width}}>
            
             </ImageBackground>  
            </View>
    )
  }
}
