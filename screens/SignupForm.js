import React, { Component } from 'react'
import firebaseConfig from '../db/firebaseConfig'
import * as firebase from 'firebase'
import { StyleSheet,
    Text, 
    View ,
    TextInput,
TouchableOpacity, AsyncStorage} from 'react-native';
import {withNavigation } from 'react-navigation'

export  class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state={
            fullname:'',
            email:'',
            phone:'',
            password:'',
            confirm_password:''
        }
    }
    

    render() {
        return (
            <View style={styles.container}>
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder='Full name'
            placeholderTextColor='#ffffff'
            onChangeText={(fullName) => this.setState({fullName})}
            />

            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder='Email'
            placeholderTextColor='#ffffff'
            onChangeText={(email) => this.setState({email})}/>

            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
             placeholder='Phone Number'
            placeholderTextColor='#ffffff'
            onChangeText={(phone) => this.setState({phone})}
            />
            
             <TextInput 
             style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder='Password'
             secureTextEntry={true}
            placeholderTextColor='#ffffff'
            onChangeText={(password) => this.setState({password})}
            />
             <TextInput 
             style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder='Confirm Password'
             secureTextEntry={true}
            placeholderTextColor='#ffffff'
            onChangeText={(confirm_password) => this.setState({confirm_password})}
            />
           

            
            
            <TouchableOpacity style={styles.button } onPress={()=> this.props.navigation.navigate("Login")} >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:12

    },
    inputBox: {
        width:250,
        backgroundColor: 'grey',
        borderRadius:25,
        paddingHorizontal:10,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10,
    },
    button: {
        width:250,
        backgroundColor: '#D84B69',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:10,

    
        
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color: 'white',
      textAlign:'center'
    },
    inputBloodbox:{
      width:7
    }

})

export default withNavigation(SignupForm) 