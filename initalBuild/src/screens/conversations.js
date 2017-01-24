import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';

export default class Conversations extends Component{
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor = "#00998b"
          barStyle = "light-content"
        />
        <View style={styles.header}>
          <View style={styles.headerTextCont}>
            <Text style={styles.headerText}>Good Morning, {this.props.fullName}</Text>
          </View>
        </View>
        <View style={styles.mainCont}>
          <View>
            <Text>This is the conversation screen.</Text>
            <Text>You are {this.props.fullName}</Text>
            <Text>Your username: {this.props.userName}</Text>
            <Button
              title="Log out"
              onPress={this.back}
            />
          </View>
        </View>
      </View>
    );
  }

  back = () => {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  header:{
    height: 48,
    backgroundColor: "#01b3a3"
  },
  headerTextCont:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerText:{
    fontSize: 22,
    fontWeight:'bold',
    color: "white",
    paddingLeft: 8,
  },
  mainCont:{
    padding: 10,
  },
});
