import React from 'react'
import {View, Text,StatusBar, StyleSheet,SafeAreaView, TouchableOpacity, TextInput, FlatList, Dimensions,KeyboardAvoidingView} from 'react-native'
import User from '../Auth/User'
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Forum extends React.Component{
    static navigationOptions =({navigation})=> {
        return{
            headerTitle: navigation.getParam('fullName', null),
            headerLeft:(
                <Icon  style={{paddingLeft:20}} 
                onPress={() =>navigation.navigate('Chat')}
                name="ios-arrow-back" size={40} color="#fff"/>  
            ),
            headerStyle:{
                backgroundColor:'#ff00ff',
                color:'white'
              },
              headerTitleStyle:{
                color:'#ffffff'
              }
        
        }
      }


      constructor(props){ 
          super(props)
          this.state={
              person:{
                    fullName: props.navigation.getParam('fullName'),
                    phone: props.navigation.getParam('phone')
              },
            textMessage: '',
            messageList:[]
          }
      }
     
      UNSAFE_componentWillMount(){
          firebase.database().ref('messages').child(User.phone).child(this.state.person.phone)
          .on('child_added',(value)=>{
              this.setState((prevState)=>{
                  return{
                    messageList:[...prevState.messageList, value.val()]
                  }
              })
          })
    }
      handleChange  = key =>val =>{
        this.setState({[key]: val})
      }
      convertTime =(time)=>{
         let d = new Date(time)
         let c = new Date()
         let result =(d.getHours() < 10 ? '0':'') + d.getHours() + ':'
         result += (d.getMinutes() <10 ? '0': '') + d.getMinutes()
         if(c.getDay() !== d.getDay()){
             result = d.getDay() +' ' + d.getMonth()+ '' + result
         }
         return result
      }

      sendMessage = async () => {
          if(this.state.textMessage.length > 0){
              let msgId = firebase.database().ref('messages').child(User.phone).child(this.state.person.phone).push().key
              let updates = {}
              let message = {
                  message: this.state.textMessage,
                  time: firebase.database.ServerValue.TIMESTAMP,
                  from: User.phone
              }
              updates['messages/' + User.phone + '/' + this.state.person.phone + '/' + msgId] = message
              updates['messages/' + this.state.person.phone + '/' + User.phone + '/' + msgId] = message
              firebase.database().ref().update(updates)
              this.setState({textMessage: ''})

          }
      
      }
      
      _renderRow=({item})=>{
          return(
              
              
              <View style={{
                  flexDirection:'column',
                   width:'60%', 
                   alignSelf: item.from===User.phone? 'flex-end':'flex-start',
                    backgroundColor:item.from===User.phone? '#d5e9dd':'#bfc1c2',
                    borderRadius:5,
                    marginBottom:10,
                   shadowOffset:{  width: 10,  height: 10,  },
                   shadowOpacity: 1.0,
                   shadowRadius: 5,
                   elevation: 5
                    
                }}>
               
                <Text 
                style={{color:'#000', padding:7, fontSize:16,
                }}
                  numberOfLines={2}>
                  {item.message}
                </Text>
                <Text numberOfLines={2} 
                   style={{color:'#000',padding:3,fontSize:12}}>
                   {this.convertTime(item.time)}
                </Text>
              </View>
            
              
          )
      }



    render(){
        let {height, width}= Dimensions.get('window')
        return(
           
            <KeyboardAvoidingView  enabled style={{flex:1}}>
            <StatusBar backgroundColor="#ff00ff"/>
            <FlatList
            style={{padding:10, height: height * 0.8}}
            data={this.state.messageList}
            renderItem={this._renderRow}
            keyExtractor={(item,index)=>index.toString()}
            />
            <View style={{flexDirection:'row', alignItems: 'center',marginHorizontal:5}}>
            <TextInput
                placeholder="type message....."
                style={styles.input}
                value={this.state.textMessage}
                onChangeText={this.handleChange('textMessage')}
                autoFocus={true}
                multiline={true}
                numberOfLines={4}
      />
           <TouchableOpacity onPress={this.sendMessage} style={{paddingBottom:10, marginLeft:5}}>
           <Icon name='md-send' size={40} color='darkblue' style={{marginLeft:10}}/>
           </TouchableOpacity>
           </View>
            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF'
      
    },
    input:{
      padding:10,
      borderWidth:1,
      borderColor:"#ccc",
      width:"80%",
      marginBottom: 10,
      borderRadius:10
    },
    btnText:{
      color:'darkblue',
      fontSize:20
    }
  });