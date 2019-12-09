import * as React from 'react';
import { Button, View, Text, StyleSheet,KeyboardAvoidingView,Dimensions,ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import Logo from './Logo'
import LoginForm from './LoginForm'
const {height,width} = Dimensions.get('screen')
export default class Login extends React.Component {
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
        <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView behavior='padding'>
        <View style={{flex:1, width:ScreenWidth,justifyContent:'center',alignItems:'center'}}>
            <ImageBackground  source={require('./images/back.png')} style={{height, width}}>
          <Logo/>
          <LoginForm/>
          </ImageBackground>
        </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fefefe',
        flexGrow: 1,
        alignItems:'center',
        
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical:16,
      flexDirection:'row',
      marginBottom:100
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
