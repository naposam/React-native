import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class Dashboard extends React.Component {
  constructor(){
    super()
}

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>You have no results for malaria yet</Text>
         
        </View>
      );
    }
  }