import React, { Component } from 'react'
import { StyleSheet,
    Text, 
    View ,
    TextInput,
TouchableOpacity, AsyncStorage,Alert,ToastAndroid} from 'react-native'
import firebase from 'firebase'
import User from '../Auth/User'
import {withNavigation } from 'react-navigation'
console.disableYellowBox = true;
export class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            phone:"",
            fullName:"",
            users:[]
          }
    }
    handleChange  = key =>val =>{
        this.setState({[key]: val})
      }
    
      UNSAFE_componentWillMount(){
        AsyncStorage.getItem('userPhone').then(val=>{
          if(val){
            this.setState({phone:val})
          }
        })
         
        let dbRef = firebase.database().ref('users')
        dbRef.once('child_added', (val)=>{
            let person = val.val()
            person.phone = val.key
            if(person.phone===User.phone){
                User.fullName = person.fullName
            }else{
            this.setState((prevState)=>{
                return{
                 users: [...prevState.users, person]
                }
            })
         }
        })
      }
      handleRegistration = async()=>{
     if(User.phone === this.state.phone){
        ToastAndroid.show('Mobile Number Already in Use!', ToastAndroid.SHORT);   
     }
       else if(this.state.phone.length < 10){
      ToastAndroid.show('Invalid mobile number!', ToastAndroid.SHORT);
        }else if(this.state.fullName < 6){
          ToastAndroid.showWithGravity(
            'full Name required',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }else{
          //save Data
         await AsyncStorage.setItem('userPhone', this.state.phone)
         User.phone = this.state.phone
         firebase.database().ref('users/'+ User.phone).set({fullName:this.state.fullName})
         this.props.navigation.navigate('Dashboard');
        }
        
      }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Full Name'
                placeholderTextColor='white'
                value={this.state.fullName}
                onChangeText={this.handleChange('fullName')}
                />

                <TextInput 
                style={[styles.inputBox]}
                 underlineColorAndroid='rgba(0,0,0,0)'
                 placeholder='Mobile Number'
                 keyboardType='numeric'
                 placeholderTextColor='white'
                  value={this.state.phone}
                  onChangeText={this.handleChange('phone')}
                 />
                
                <TouchableOpacity style={styles.button} onPress={this.handleRegistration} >
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
        marginBottom:60

    },
    inputBox: {
        width:300,
        backgroundColor: 'grey',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10,
    },
    button: {
        width:300,
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
    }
})

export default withNavigation(LoginForm) 
