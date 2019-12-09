import React from 'react'
import {View, Text , StyleSheet,TouchableOpacity,Image,StatusBar} from 'react-native'
import {withNavigation } from 'react-navigation'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Take or select an Image',
    takePhotoButtonTitle:'Take photo with your camera',
    chooseFromLibraryButtonTitle:'choose photo from library',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      gender:'',
    },
  };
  
  
export  class MalariaDetection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            avatarSource:null,
            ButtonStateHolder : true ,
        };
    }
    takePick=()=>{
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
            else {
            const source = { uri: response.uri };
            this.setState({
              avatarSource: source,
            });
          }
        });
      }
    render() {
        return (
            <View style={{flex:1}}>
            <StatusBar backgroundColor="#D84B69"/>
            <View style={{flexDirection:'row', flex: 1,marginBottom:100, margin:20}}>
            <TouchableOpacity style={styles.button} onPress={this.takePick} >
            <Text style={styles.buttonText}>Choose File</Text>
            </TouchableOpacity>
             
            <TouchableOpacity style={styles.button} disabled={this.state.ButtonStateHolder}>
            <Text style={styles.buttonText}>Predict</Text>
            </TouchableOpacity>
            
            </View>
            <View >
            <ScrollView>
     <View style={styles.fieldSet}>
    <Text style={styles.legend}>IMAGE</Text>
    <Image
          source={this.state.avatarSource}
          style={{width:300, height:150, marginLeft:10, marginTop:25}}
          />
    </View>

    <View style={styles.fieldSet}>
    <Text style={styles.legend}>Test Results</Text>
    <Text style={{marginTop:20}}>malaria Result</Text>
    </View>
    
    </ScrollView>
            </View>

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

const styles= StyleSheet.create({
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
   },
   button: {
    width:100,
    backgroundColor: '#D84B69',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:10,
    height:40,
    marginLeft:20


    
},
buttonText: {
  fontSize:16,
  fontWeight:'200',
  color: 'white',
  textAlign:'center'
},
fieldSet:{
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#D84B69',
    height:200
},
legend:{
    position: 'absolute',
    top: -10,
    left: 140,
    borderWidth:1,
    borderColor:'#D84B69',
    fontWeight: 'bold',
    borderRadius:50,
    backgroundColor: '#FFFFFF',
    color:'#D84B69',
    paddingLeft:3
    
}
})

export default withNavigation(MalariaDetection) 