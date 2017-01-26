import React, { Component } from 'react';

import {
  Navigator,
} from 'react-native';

import SignIn from './components/signIn';
import SignUp from './components/signUp';
import MainApp from './screens/MainApp';
import MyAccount from './components/MyAccount'

export default class Router extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'SignIn', title: 'SignIn'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.type == 'up') {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          } else if (route.type =='down') {
            return Navigator.SceneConfigs.VerticalUpSwipeJump;
          } else {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          }
        }}
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == 'SignIn') {
      return (
        <SignIn
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
    if(route.name == 'SignUp') {
      return (
        <SignUp
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
    if(route.name == 'MainApp') {
      return (
        <MainApp
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
  }
}
