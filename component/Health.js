import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native'
import {withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
export class Health extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <View style={{flex:1}}>
           <StatusBar backgroundColor="#D84B69"/>
           <Text>Healths news</Text>


           <View style={{flex:3}}>

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
        );
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

 export default withNavigation(Health)