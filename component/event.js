import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,SafeAreaView, StatusBar } from 'react-native'
import {withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Event", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Event", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Event", content: "Lorem ipsum dolor sit amet" }
];

export class event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.disableYellowBox = true;
        return (

           <View style={{flex:1}}>
           <StatusBar backgroundColor="#D84B69"/>
           <SafeAreaView style={{flex:14}}>
           <Container>
           <Content padder>
             <Accordion
               dataArray={dataArray}
               headerStyle={{ backgroundColor: "#b7daf8" }}
               contentStyle={{ backgroundColor: "#ddecf8" }}
             />
             
           </Content>
         </Container>
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

 export default withNavigation(event)