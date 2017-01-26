import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  StatusBar
} from 'react-native';

export default class SignUn extends Component {
  constructor()  {
    super()
    this.state = {
      fullName: '',
      userName: '',
      passWord: ''
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          backgroundColor = "#00998b"
          barStyle = "light-content"
        />
        <View style = {styles.logoMain}>
          <Image
            style ={styles.logo}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style= {styles.signUpMain}>
          <View style= {styles.signUp}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Fullname"
                onChangeText={(text) => this.setState({fullName: text})}
                value={this.state.fullName}
              />
              {console.log(this.state.fullName)}
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => this.setState({userName: text})}
              />
              {console.log(this.state.userName)}
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => this.setState({passWord: text})}
              />
              {console.log(this.state.passWord)}
            </View>
            <View style={styles.signUpButton}>
              <Button
                title="Sign Up"
                onPress={this.goToConversations}
              />
            </View>
          </View>
        </View>
        <View style={styles.signIn}>
          <Button
            title="Sign In"
            color="#01b3a3"
            onPress={this.goToSignIn}
          />
        </View>
      </View>
    );
  }

  goToSignIn = () => {
    this.props.navigator.push({
      name: 'SignIn',
      index: 'SignIn',
      type: 'up',
    })
  }

  goToConversations = () => {
    this.props.navigator.push({
      name: 'MainApp',
      index: 'MainApp',
      passProps: {
        fullName: this.state.fullName,
        userName: this.state.userName,
      },
    })
  }
}

  const styles = StyleSheet.create ({
  statusBar: {
    height: 20,
    backgroundColor: '#01b3a3'
  },
  container: {
    flex: 1,
  },
  logoMain: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 133,
    height: 125,
  },
  signUpMain: {
    flex: 5,
    alignItems: 'center',
  },
  signUp: {
    width: 215,
  },
  input: {
    height: 40,
  },
  signUpButton: {
    marginTop: 5,
  },
  signIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  });
