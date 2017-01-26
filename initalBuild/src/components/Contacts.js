import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Contacts extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <Text>This is the contacts screen</Text>
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
