import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import Sidebar from '../component/Sidebar'
import Splash from './Splash'
import Login from './Login'
import Dashboard from './Dashboard'
import Signup from './signup'
import Settings from './Settings'
import Menus from './Camera'
import Profiles from './Profile'
import Malaria from '../component/MalariaDetection'
import Events from '../component/event'
import Health from '../component/Health'
import Forum from '../component/Forum'
import FingerPrint from '../component/fingerPrint'
import ChatScreen from '../component/ChatScreen'
const WIDTH = Dimensions.get('window').width

const DrawerConfig ={
drawerWidth:WIDTH*0.83,
contentComponent:({navigation}) =>{
  return (<Sidebar navigation={navigation}/>)
}
}


const RootStack = createStackNavigator(
  {
    Login: Login,
    SignupScreen: Signup,
   
  }
  
);


const Results = createStackNavigator({
  Result: {
    screen: Dashboard,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Malaria Test Results',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  },

  
},{
  defaultNavigationOptions:{
    gesturesEnabled:false
}
});
const Setting = createStackNavigator({
  Settings:{screen: Settings,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Settings',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  }
 
 
})
const Event = createStackNavigator({
  Events:{screen: Events,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Event Held',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  }
 
 
})
const HealthNews = createStackNavigator({
  Health:{screen: Health,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Health News',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  }
 
 
})
const Forums = createStackNavigator({
  Forum:{screen: Forum,
  

  }
 
 
})
const ChatScreens = createStackNavigator({
  Chat:{screen: ChatScreen,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Chat',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#cc00d6',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  }
 
 
})

const MalariaDection = createStackNavigator({
  Malaria:{screen: Malaria,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Malaria Detection',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.navigate('Dashboard')}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }

  }
 
 
})

const Profile = createStackNavigator({
  Profiles:{screen: Profiles,
    navigationOptions:({navigation})=>{
      return{
      headerTitle:'Profile',
      headerLeft:(
        <Icon  style={{paddingLeft:20}} 
        onPress={() =>navigation.openDrawer()}
        name="ios-arrow-back" size={40} color="#fff"/>  
    )
      ,
      headerStyle:{
        backgroundColor:'#ff00ff',
        color:'white'
      },
      headerTitleStyle:{
        color:'#ffffff'
      }

    }
  }
  }
 
 
})



const Menu = createStackNavigator({
  Menus:{screen: Menus,

      navigationOptions:({navigation})=>{
          return{
              headerTitle:'Menu',
              headerRight:(
                  <Icon  style={{paddingRight:10}} 
                  onPress={() => navigation.toggleDrawer()}
                  name="md-menu" size={30} color='#FFFFFF'/>  
              ),
              headerStyle:{
                backgroundColor:'#ff00ff',
              },
              headerTitleStyle:{
                color:'#ffffff'
              }
                   
              
          }
      }

  }
 
 
})

const MenuNavi = createBottomTabNavigator(
  {

    Menu
  },
  {
    navigationOptions: ({navigation}) =>{
        const {routeName} = navigation.state.routes[navigation.state.index]
        return{
            header:null,
            headerTitle:routeName
        }
    }
},
{
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "white",
    style: {
      backgroundColor: '#ff00ff',
    }
  }
}
)
const DashboardStackNavigator = createStackNavigator({
  Dashboard:{ 
      screen: MenuNavi}
},{
  NavigationOptions:({navigation}) =>{
      return{
          headerLeft:(
              <Icon  style={{paddingLeft:10}} 
              onPress={() => navigation.toggleDrawer()}
              name="md-menu" size={30}/>
          )
      }
  }
})
const AppDrawNavigator = createDrawerNavigator({
  Dashboard:{ 
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "Home",
 
      }
    
  },
      Profile,
      Setting,
      Results

},
DrawerConfig
)


const MainSwitch = createSwitchNavigator(
  {
    Splash: Splash,
    Authentication: RootStack,
    MenuDispay: AppDrawNavigator,
    MalariaDection: MalariaDection,
    event:Event,
    HealthNews:HealthNews ,
    Forums :Forums ,
    print: FingerPrint,
    ChatScreens:ChatScreens
  },
  {
    initialRouteName: "Splash"
  }
);


const AppContainer = createAppContainer(MainSwitch);
export default AppContainer
// export default class App extends React.Component {
//   render() {
//     return ;
//   }
// }