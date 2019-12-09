import React from 'react'
import {View, Text, StyleSheet, StatusBar, Image,ImageBackground, Dimensions,AsyncStorage} from 'react-native'
import User from '../Auth/User'
const width = Dimensions.get('window').width
const height = Dimensions.get('screen').height
import firebaseConfig from '../db/firebaseConfig'
export default class Splash extends React.Component{
    constructor(props) {
        super(props)
      this._bootstrapAsync();
    }
    static navigationOptions ={
       header: null
   }
   
   _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() =>{
    this.props.navigation.navigate(User.phone ? 'print' : 'Authentication');
})
  };
        render() {
            return (
                
               <View style={styles.container}>
               <ImageBackground  source={require('./images/splash_second.png')} style={{height, width}}>
                <Image  
                
               source={require('./images/log.jpg')} style={{marginTop:200, height:150, width:150, marginLeft:100}}/>
           <Text style={styles.Welcome}>
                    MALARIA TEST APP
                </Text>
                 </ImageBackground>
            </View>
           
            )
        }
    }

    const styles = StyleSheet.create({
        container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#FFFFFF',
        // marginTop:Platform.OS ==='android'? 40 : null
        },
        Welcome: {
        fontSize:30,
        margin:10,
        textAlign: 'center',
        color:'#D84B69',
        fontFamily: 'sans-serif',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
    }
        })