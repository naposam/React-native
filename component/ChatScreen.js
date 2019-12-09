import React from 'react'
import {View, Text, TouchableOpacity, AsyncStorage, FlatList, SafeAreaView, Image,StatusBar,StyleSheet} from 'react-native'
import User from '../Auth/User'
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'
export default class ChatScreen extends React.Component{
    static navigationOptions =({navigation}) =>{
        return{
            title:'Home',
            headerRight:(
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Icon name='md-contact' size={40} color='#fff' style={{marginRight:8}}/>
                </TouchableOpacity>
            )
            
        }
        
      }

      state = {
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

    renderRow = ({ item }) => {
        return(
      <TouchableOpacity 
      style={{padding:10,borderBottomColor:'#ccc', borderBottomWidth:1}} 
      onPress={()=>this.props.navigation.navigate('Forum', item)}>
      <Text style={{fontSize:20}}>{item.fullName}</Text>
      </TouchableOpacity>
      )
    }
    render(){
        return(
            <View style={{flex:1}}>
            <SafeAreaView style={{flex:8}}>
            <StatusBar backgroundColor="#ff00ff"/>
            <FlatList
            data={this.state.users}
            renderItem={this.renderRow}
            keyExtractor = {(item) => item.phone}
            />
           
            </SafeAreaView>

            <View style={{flex:1}}>
      
           <View style={styles.footer}>
          <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Dashboard')}>
          <Icon  style={{paddingLeft:20}} 
         
          name="ios-return-left" size={40} color="#000"/>
          </TouchableOpacity>
          <Text style={styles.description}></Text>
          <Text style={styles.logo}>ultdev 2019</Text>
          </View>
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
    description:{
       flex:3,
       marginLeft:20,
       fontSize: 16,
      },
      footer:{
       height:50,
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor:'white',
       borderTopWidth:1,
       borderTopColor: 'lightgray',
   
   },
      logo:{
          flex:3,
          textAlign:'right',
          marginRight:20,
          color:'gray'
      }
})