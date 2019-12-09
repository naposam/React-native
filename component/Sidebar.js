import React from 'react'
import {View, Text, StyleSheet,
     ScrollView, Image, Dimensions, TouchableOpacity,AsyncStorage} from 'react-native'

import {createDrawerNavigatorItems} from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import User from '../Auth/User'
import firebase from 'firebase'
export default class Sidebar extends React.Component{
    state={
        fullName: User.fullName,
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

    _logout=async()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Authentication');
    }
    navLink(nav, text){
        return(
            <TouchableOpacity style={{height:50}} onPress={()=> this.props.navigation.navigate(nav)}>
            <Text style={styles.links}>{text}</Text>
            </TouchableOpacity>
        )
    }
     render(){
         return(
       <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
       <View style={styles.topLink}>
       <Icon  style={{paddingLeft:20}} 
       onPress={() =>this.props.navigation.closeDrawer()}
       name="ios-arrow-back" size={40} color="#fff"/>  
       <View style={styles.profileDisplay}>
       <View style={styles.ImageView}>
       <Image style={styles.img} source={require('./image/profile.png')}/>
       </View>
       <View style={styles.profileText}>
       <Text style={styles.name}>{User.fullName}</Text>
       <TouchableOpacity onPress={this._logout}>
            <Text style={styles.btnText}>LogOut</Text>
            </TouchableOpacity>
       </View>
       </View>
       </View>
       
       <View style={styles.bottomLink}>
          {this.navLink('Setting','Setting')}
          {this.navLink('Profiles','User Profile')}
          {this.navLink('Result','Malaria Test Results')}
       </View>
       </ScrollView>
       <View style={styles.footer}>
       <TouchableOpacity  onPress={() =>this.props.navigation.closeDrawer()}>
       <Icon  style={{paddingLeft:20}} 
      
       name="ios-return-left" size={40} color="#000"/>
       </TouchableOpacity>
       <Text style={styles.description}></Text>
       <Text style={styles.logo}>ultdev 2019</Text>
       </View>
      
       </View>
       
       
         )
     }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    scrollView:{
    flex:1
    },
    link:{
        flex:1,
        fontSize: 30,
        padding:6,
        paddingLeft:14,
        textAlign:'left'
    },
    profileDisplay:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:25,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
    },
    ImageView:{
        flex:1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img:{
     height:70,
     width:70,
     borderRadius:50
    },
    profileText:{
     flex:3,
     flexDirection: 'column',
     justifyContent:'center'
    },
    name:{
      fontSize: 20,
      paddingBottom: 5,
      color:'white',
      textAlign:'left'
    }
    ,
    topLink:{
     height:160,
     backgroundColor:'#ff00ff',
     borderWidth:1,
     borderColor:'#cc00d6'
    },
    bottomLink:{
        flex:1,
        backgroundColor:'white',
        paddingTop:20,
        paddingBottom: 450,
        paddingLeft: 20,
        fontWeight:'bold'
        

    },
    footer:{
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor: 'lightgray',

    },
    description:{
     flex:3,
     marginLeft:20,
     fontSize: 16,
    },
    logo:{
        flex:3,
        textAlign:'right',
        marginRight:20,
        color:'gray'
    },
    btnText:{
        color:'white',
        fontSize:15
      }
})