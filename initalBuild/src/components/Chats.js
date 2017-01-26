import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Chats extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <Text>This is the chats screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
    backgroundColor: '#673ab7',
  },
})
