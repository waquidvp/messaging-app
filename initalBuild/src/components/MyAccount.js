import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from 'react-native';

import userdata from '../assets/userdata';
import ProfileBubble from './ProfileBubble';
import SettingsBubble from './SettingsBubble';

export default class MyAccount extends Component{

  render() {
    return (
      <View style={styles.mainCont}>
        <ScrollView>
          <Image source={{ uri : userdata.picture.banner }} style={styles.banner}/>
          <View style={styles.separator}/>
          <ProfileBubble />
          <View style={styles.separator}/>
          <SettingsBubble
            source="https://s27.postimg.org/jffgor9vz/addblue.png"
            name='Invite Friends'
            width= {23}
            height= {23}
          />
          <View style={styles.separator}/>
          <SettingsBubble
            source="https://s27.postimg.org/u4xqurb2n/mediablue.png"
            name='Media'
            width= {23}
            height= {20}
          />
          <View style={styles.separator}/>
          <SettingsBubble
            source="https://s27.postimg.org/z26q24nnz/lockblue.png"
            name='Lock Chats'
            width= {21}
            height= {28}
          />
          <View style={styles.separator}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
  },
  separator:{
    height: 4,
  },
  banner:{
    height: 200,
    borderRadius: 20,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
  },
})
