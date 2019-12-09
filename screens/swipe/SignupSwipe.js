import React, { Component } from 'react'
import {View, Text, StyleSheet, ImageBackground,Dimensions,TouchableOpacity, ScrollView} from 'react-native'
import SignupForm from './SignupSwipeForm'
import Logo from '../Logo'
const {height,width} = Dimensions.get('screen')
import {withNavigation } from 'react-navigation'
export class SignupSwipe extends Component {
    constructor(){
        super()
    }
    static navigationOptions ={
       header: null
   }
    render() {
        let ScreenWidth = Dimensions.get('window').width
        let ScreenHeight = Dimensions.get('window').height
        return (
         
            <View style={{flex:1, width:ScreenWidth,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground  source={require('../images/back.png')} style={{height, width}}>
                <Logo/>
                    <SignupForm/>
                    <View style={styles.signupTextCont}>
        <Text style= {styles.signupText}></Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
        <Text style={styles.signupButton}>Already have an account?Sign in</Text>
        </TouchableOpacity>
      </View>
               </ImageBackground>
            </View>
           

          
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        alignItems:'center',
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical:16,
      flexDirection:'row',
      marginBottom:90
    },
    signupText: {
color: 'grey',
fontSize:16,

    },
    signupButton: {
      color:'#D84B69',
      fontSize:16,
      fontWeight:'500'
    }

})

export default withNavigation(SignupSwipe) 