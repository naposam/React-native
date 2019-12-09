import React, { Component } from 'react'
import { Text, View, Dimensions, Modal, Share,WebView } from 'react-native'
import {Container, Header, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Title} from 'native-base'

const webViewHeight = Dimensions.get('window').height-56

export default class modalComponent extends Component {
    constructor(props){
        super(props)
    }
    handleClose = () =>{
     return this.props.onClose()
    }

    handleShare = () =>{
     const {url, title}= this.props.articleData
     message = `${title}\n\nRead More @${url}\n\nShared via Ultdev News App`
     return Share.share(
         {title, message,url:message},
         {dialogTitle:`Share ${title}`}
     )
    }
    render() {
        const { showModal, articleData} = this.props;
        const { url } = articleData
        if(url !=undefined){
        return (
           <Modal
           animationType="slide"
           transparent
           visible={showModal}
           onRequestClose={this.handleClose}
           >
               
               <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                   <Header style={{backgroundColor:'#D86B79'}}>
                       <Left>
                           <Button onPress={this.handleClose} transparent>
                               <Icon name="close" style={{color:'white', fontSize:12}}/>
                           </Button>
                       </Left>
                       <Body>
                           <Title children={articleData.title} style={{color:'white'}}/>
                       </Body>
                       <Right>
                             <Button onPress={this.handleShare} transparent>
                               <Icon name="share" style={{color:'white', fontSize:12}}/>
                           </Button>
                       </Right>
                   </Header>
                   <Content contentContainerStyle={{height: webViewHeight}}>
                       <WebView source={{uri: url}} style={{flex:1}}
                       onError={this.handleClose} startInLoadingState
                       scalesPageToFit
                       />
                   </Content>
               </Container>
           </Modal>
        )
        }else{
            return null
        }
    }
}
