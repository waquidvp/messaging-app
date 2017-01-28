import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import userdata from '../assets/userdata';

export default class ProfileBubble extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <View style={styles.innerCont}>
          <View style={styles.iconMainCont}>
            <View style={styles.iconCont}>
              <Image source={require('../assets/icons/userBlue.png')} style={styles.icon} />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{userdata.name.first} {userdata.name.last}</Text>
            <Text style={styles.username}>{userdata.username}</Text>
          </View>
          <View style={styles.logOutCont}>
            <View style={styles.logOutButton}>
              <Text style={styles.logOut}>Log Out</Text>
            </View>
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
  iconMainCont:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCont:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#C8C8C8'
  },
  icon:{
    height: 23,
    width: 23,
  },
  info:{
    flex: 8,
    justifyContent: 'space-around',
    paddingLeft: 5,
    flexDirection: 'column',
  },
  name:{
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
  },
  username:{

  },
  logOutCont:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButton:{
    backgroundColor: '#C8C8C8',
    borderRadius: 20,
    padding: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOut:{
    color: 'red',
  },
})
