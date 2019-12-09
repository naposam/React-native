

import React from 'react';
import {View,Text, StyleSheet, DeviceEventEmitter, NativeModules, Image,StatusBar} from 'react-native';
export default class fingerPrint extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status:<Image style={{width:100,height:100}}
            source={require('./image/fing.png')}/>,
            error:'Unlock Malaria test using your Touch ID'
        }
    }

    componentDidMount(){
     DeviceEventEmitter.addListener('FINGERPRINT_SCANNER_AUTHENTICATION',(mgs)=>{
        this.setState({error: mgs});
     });
     this.scan().then(success => success ? this.props.navigation.navigate("Dashboard"):console.log(success))
    }
    async scan(){
       return await NativeModules.ReactNativeFingerprintScanner.authenticate();
    }
    render(){
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <View>
      <Text style={styles.txtUp}>Unlock Malaria Test App</Text>
      <Text style={styles.txtDown}>{this.state.error }</Text>
      </View>
           <View style={styles.container}>
           <View>{this.state.status}</View>
           </View>
           
      </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
       
       
    },
    txtUp:{
      
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 25,
        marginTop:10,
        color:'#ff00ff'

    
      },
      txtDown:{
        textAlign:'center',
        fontSize: 15,
        marginTop:5,
        color:'#ff00ff'
    
      },
      error:{
        color:'red',
        fontWeight: 'bold',
      }


})
