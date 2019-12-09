import React, { Component } from 'react'
import {View, Text, ImageBackground,Dimensions,
    SafeAreaView,AsyncStorage,StatusBar,TextInput, StyleSheet,TouchableOpacity,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import User from '../Auth/User'
import firebase from 'firebase'
const {height,width} = Dimensions.get('screen')

export default class Profile extends Component {
    state={
        fullName: User.fullName,
        email:User.email,
        address:User.address,
       region:User.region,
        users:[]
    }

 UNSAFE_componentWillMount(){
     let dbRef = firebase.database().ref('users')
     dbRef.on('child_added', (val)=>{
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



    handleChange  = key =>val =>{
        this.setState({[key]: val})
      }

      changeName=async()=>{
          if(this.state.fullName.length <6){
              ToastAndroid.show('Please Enter Your Full Name !', ToastAndroid.SHORT);
          }
          else if(User.fullName == this.state.fullName){
                firebase.database().ref('users').child(User.phone).update({
                    // fullName:this.state.fullName,
                    email:this.state.email,
                    address:this.state.address,
                    region:this.state.region
                })
                // User.fullName=this.state.fullName
                User.email= this.state.email
                User.address= this.state.address
                User.region= this.state.region
                ToastAndroid.showWithGravity(
                    'Updated Successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
    }
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#D84B69"/>
            <Text style={{fontSize:20}}>{User.phone}</Text>
            <Text style={{fontSize:20}}>{User.fullName}</Text>
            <TextInput
            style={styles.input}
              value={this.state.fullName}
              onChangeText={this.handleChange('fullName')}
              editable={false}
            />
            <TextInput
            style={styles.input}
              value={this.state.email}
              onChangeText={this.handleChange('email')}
              placeholder='Enter Email'
            />
            <TextInput
            style={styles.input}
              value={this.state.address}
              onChangeText={this.handleChange('address')}
              placeholder='Enter Residential Address'
            />
            <TextInput
            style={styles.input}
              value={this.state.region}
              onChangeText={this.handleChange('region')}
              placeholder='Enter Region'
            />
            <TouchableOpacity onPress={this.changeName}>
            <Text style={styles.btnText}>Update details</Text>
            </TouchableOpacity>
            
            </SafeAreaView>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
        
      },
      input:{
        padding:10,
        borderWidth:1,
        borderColor:"#D84B69",
        width:"80%",
        marginBottom: 10,
        borderRadius:5,
        fontSize:18
      },
      btnText:{
        color:'darkblue',
        fontSize:20
      }
    });
