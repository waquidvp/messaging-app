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

export default class SignIn extends Component {
  constructor()  {
    super()
    this.state = {
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
        <View style= {styles.loginMain}>
          <View style= {styles.login}>
            <View style= {styles.loginInput}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => this.setState({userName: text})}
                value={this.state.userName}
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
            <View style={styles.text}>
              <Text>Forgotten your password?</Text>
            </View>
            <Button
              title="Sign In"
              color="#01b3a3"
              onPress={() => alert('Username: ' + this.state.userName)}
            />
          </View>
        </View>
        <View style={styles.signUp}>
          <Button
            title="Sign Up"
            onPress={this.goToSignUp}
          />
        </View>
      </View>
    );
  }

  goToSignUp = () => {
    this.props.navigator.push({
      name: 'SignUp',
      title: 'SignUp'
    });
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  logoMain: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 132,
    height: 125,
  },
  loginMain: {
    flex: 5,
    alignItems: 'center',
  },
  login: {
    width: 220,
  },
  input: {
    height: 40,
  },
  text: {
    marginBottom: 20,
    marginTop: 5,
    alignItems: 'center'
  },
  signUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
