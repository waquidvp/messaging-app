import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class MyAccount extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <Text>This is the account page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
    backgroundColor: '#ff4081',
  },
})
