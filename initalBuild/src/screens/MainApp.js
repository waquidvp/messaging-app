import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import Emoji from 'react-native-emoji';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import Contacts from '../components/Contacts';
import Chats from '../components/Chats';
import MyAccount from '../components/MyAccount';

export default class MainApp extends Component{
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Contacts' },
      { key: '2', title: 'Chats' },
      { key: '3', title: 'My Account' },
    ],
    name: 'Waquid',
  };

  render() {
    return (
      <View style={styles.cont}>
        <StatusBar
          backgroundColor = "#00998b"
          barStyle = "light-content"
        />
        <View style={styles.header}>
          <View style={styles.headerTextCont}>
            <View style={styles.headerTextContIn}>
              <Text style={styles.headerText}>Good Morning, {this.state.name}</Text>
              <Text style={styles.emoji}> <Emoji name="sunrise"/></Text>
            </View>
          </View>
          <View style={styles.iconsCont}>
            <View style={styles.icons}>
              <Image
                style={styles.searchIcon}
                source={require('../assets/icons/search.png')}
              />
              <Image
                style={styles.addIcon}
                source={require('../assets/icons/add.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.mainCont}>
          <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
        </View>
      </View>
    );
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar { ... props } />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Contacts />;
    case '2':
      return <Chats />;
    case '3':
      return <MyAccount />;
    default:
      return null;
    }
  };

  back = () => {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  cont:{
    flex: 1,
  },
  header:{
    flex: 1,
    backgroundColor: "#01b3a3",
    flexDirection: 'row',
  },
  headerTextCont:{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerTextContIn:{
    flexDirection: 'row',
  },
  headerText:{
    fontSize: 19,
    color: "white",
    paddingLeft: 8,
  },
  emoji:{
    fontSize: 18,
    color: 'white',
  },
  iconsCont:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icons:{
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchIcon:{
    height: 20,
    width: 20,
  },
  addIcon:{
    height: 20,
    width: 20,
  },
  mainCont:{
    flex: 12,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
