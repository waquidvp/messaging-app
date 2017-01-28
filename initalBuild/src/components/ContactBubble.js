import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ContactBubble extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <View style={styles.innerCont}>
          <View style={styles.proPic}>
            <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.name.first} {this.props.name.last}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
    height: 75,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    marginLeft: 4,
    marginRight: 4,
  },
  innerCont:{
    flex: 1,
    margin: 6,
    flexDirection: 'row',
  },
  proPic:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo:{
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  info:{
    flex: 4,
    justifyContent: 'space-around',
    paddingLeft: 5
  },
  name:{
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
  },
})
