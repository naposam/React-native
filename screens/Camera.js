import React, { Component } from 'react'
import {Text, View,StatusBar,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet,WebView} from 'react-native'
// import { Button, ThemeProvider, Card } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation } from 'react-navigation'
import User from '../Auth/User'
import firebase from 'firebase'
// const widthScreen = Dimensions.get('screen').width
// const heightScreen = Dimensions.get('screen').height
   const dimensions = Dimensions.get("window")
    const ViewHight = Math.round((dimensions.width * 9) / 16)
    const ViewWidth = dimensions.width

export class Camera extends Component {
  constructor(props){
      super(props)
      
  }
  render() {
    
    return (
        <SafeAreaView style={{flex:1,}} >
        <StatusBar backgroundColor="#cc00d6"/>
        <ScrollView  horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}  pagingEnabled>

        <View  style={styles.btnView}>
        <TouchableOpacity style={styles.btnBox}  onPress={()=> this.props.navigation.navigate("MalariaDection")}>
        <Text style={styles.btnText}>MALARIA TEST</Text>
        
        </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnBox} onPress={()=> this.props.navigation.navigate("HealthNews")}>
        <Text style={styles.btnText}>HEALTH NEWS</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.btnView}  >
        <TouchableOpacity style={styles.btnBox} onPress={()=> this.props.navigation.navigate("event")}>
        <Text style={styles.btnText}>EVENTS</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnBox} onPress={()=> this.props.navigation.navigate("Chat")}>
        <Text style={styles.btnText}>FORUM</Text>
        </TouchableOpacity>
       
        </View>

        </ScrollView>
        <View >
        <Text style={{justifyContent:'center', textAlign:'center', fontWeight:'bold'}}>MAJOR EVENTS</Text>
        </View>
        <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/new.jpg')} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontWeight:'bold'}}>Malaria Out Break </Text>
                <Text note numberOfLines={2}>There has been malaria Out break in some part of Ghana</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/new.jpg')} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontWeight:'bold'}}>Free Malaria Screening</Text>
                <Text note numberOfLines={2}>There has been malaria Out break in some part of Ghana</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/bg.jpg')} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontWeight:'bold'}}>Get Tested For Malaria Now</Text>
                <Text note numberOfLines={2}>There has been malaria Out break in some part of Ghana</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/new.jpg')} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontWeight:'bold'}}>Ghana To Be Free Malaria in 2030</Text>
                <Text note numberOfLines={2}>There has been malaria Out break in some part of Ghana</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/mala.jpg')} />
              </Left>
              <Body>
                <Text numberOfLines={2} style={{fontWeight:'bold'}}>New way for Checking Malaria </Text>
                <Text note numberOfLines={2}>There has been malaria Out break in some part of Ghana</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
   </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

  container:{

  },
  btnView:{
   marginTop:10,
    width:ViewWidth,
    alignItems:'center', 
    backgroundColor:'#ff00ff',
     height:ViewHight,
    borderBottomStartRadius:100,
    borderTopEndRadius:100,
    borderColor:'#cc00d6',
    borderWidth: 5,
    
  },
  btnBox:{
    width:200,
    height:100,
   borderColor:'#fff',
    marginBottom:10,
    borderRadius: 100,
    borderWidth:1,
    marginTop:40,
    elevation:5
  },
  btnText:{
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    fontSize:20,
    fontFamily:'san-serif',
    marginTop:35,
    color:'#FFFFFF',


  }
})


export default withNavigation(Camera) 