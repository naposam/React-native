import React, {useState,useEffect} from 'react'
import {View, Button, Image, StyleSheet} from 'react-native'
import ImagePicker from 'react-native-image-picker'
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

class ImagePick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
            avatarSource:null,
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
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image  source={this.state.avatarSource} style={styles.preImage}/>
            </View>
            <View style={styles.button}>
            <Button title="upload Image" onPress={this.takePick}/>
            </View>
            </View>
            )
    }

}

const styles= StyleSheet.create({
 container:{
     width:'100%',
     alignItems:'center'
 },
 imageContainer:{
     borderWidth:1,
     borderColor:'#000',
     width:150,
     height:100,
     backgroundColor:'#eeee',
     borderRadius:50,
     
 },
 button:{
     margin:8
 }
 ,
 preImage:{
     width:148,
     height:98,
     borderRadius:50
 }
})

export default ImagePick