import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

class conversations extends Component{
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor = "#01b3a3"
          barStyle = "light-content"
        />
        <Text style={styles.title}>This is the conversations page</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title:{
    fontSize: 14,
  },
});

export default conversations;
