import React, { Component } from 'react'
import { Text,StyleSheet,Image, View } from 'react-native'

class Logo extends Component {
  render() {
    return (
      
          <View style={styles.container}>
          <Image style={{width:90,height:65}}
          source={require('./images/log.png')}/>
           
           </View>
    )
  }
}
const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'

    },
    logoText : {
        fontSize:18,
        marginVertical: 10,
        color:'#D84B69'
    }
        
    
})
export default Logo