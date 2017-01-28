import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import userdata from '../assets/userdata';

export default class SettingsBubble extends Component{
  render() {
    return (
      <View style={styles.mainCont}>
        <View style={styles.innerCont}>
          <View style={styles.iconMainCont}>
            <View style={styles.iconCont}>
              <Image source={{ uri: this.props.source}} style={{width: this.props.width, height: this.props.height}} />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.name}</Text>
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
  info:{
    flex: 11,
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
})
