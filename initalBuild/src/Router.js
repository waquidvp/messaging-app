import React, { Component } from 'react';

import {
  Navigator,
} from 'react-native';

import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Conversations from './screens/conversations';

export default class Router extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'SignIn', title: 'SignIn'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.name == 'SignIn') {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          } else if (route.type =='right') {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
          } else {
            return Navigator.SceneConfigs.VerticalUpSwipeJump;
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
    if(route.name == 'Conversations') {
      return (
        <Conversations
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
  }
}
