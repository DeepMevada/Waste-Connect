import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  LayoutAnimation,
  Image,
} from 'react-native';
import { Container } from 'native-base';
import * as firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errormsg: null,
  };
  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errormsg: error.message }));
  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}>
        <Container>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="#A1AD87"
              translucent={false}
              hidden={false}
              barStyle="dark-content"
            />
            <Image
              source={require('../assets/logo/logo.png')}
              style={{
                marginTop: 50,
                width: 330,
                height: 100,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.greet}>Sign In</Text>
            <View style={styles.errormsg}>
              {this.state.errormsg && (
                <Text style={styles.error}>{this.state.errormsg}</Text>
              )}
            </View>
            <View style={styles.form}>
              <Text style={styles.inputLabel}>Email </Text>
              <TextInput
                style={styles.inputField}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />

              <View style={{ marginTop: 32 }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.inputField}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={this.handleLogin}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 32, alignSelf: 'center' }}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text>
                {' '}
                New to Waste Connect?{' '}
                <Text style={{ color: '#00A859', fontWeight: '500' }}>
                  {' '}
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greet: {
    marginTop: 35,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  errormsg: {
    alignItems: 'center',
    height: 72,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: 'red',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputLabel: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  inputField: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 48,
    fontSize: 15,
    color: '#161F3D',
  },
  btn: {
    marginHorizontal: 30,
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A859',
  },
});
