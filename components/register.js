import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  StatusBar,
  Button,
} from 'react-native';
import * as firebase from 'firebase';
import { Container } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Register extends React.Component {
  state = {
    name: '',
    city: '',
    phoneNumber: '',
    email: '',
    password: '',
    errormsg: null,
  };
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
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
            <Text style={styles.greet}>
              Welcome to{' '}
              <Text style={{ color: '#00A859', fontWeight: '700' }}>
                Waste Connect
              </Text>
            </Text>
            <TouchableOpacity
              style={{ marginTop: 5, alignSelf: 'center' }}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>
                {' '}
                Already have an account?{' '}
                <Text style={{ color: '#00A859', fontWeight: '500' }}>
                  {' '}
                  Log In
                </Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.errormsg}>
              {this.state.errormsg && (
                <Text style={styles.error}>{this.state.errormsg}</Text>
              )}
            </View>
            <View style={styles.form}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.inputField}
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />

              <View style={{ marginTop: 25 }}>
                <Text style={styles.inputLabel}>City</Text>
                <TextInput
                  style={styles.inputField}
                  autoCapitalize="none"
                  onChangeText={city => this.setState({ city })}
                  value={this.state.city}
                />
              </View>

              <View style={{ marginTop: 25 }}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.inputField}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </View>

              <View style={{ marginTop: 25 }}>
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
            <TouchableOpacity style={styles.btn} onPress={this.handleSignUp}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>Sign Up</Text>
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
    marginTop: 20,
  },
  greet: {
    marginTop: 30,
    fontSize: 20,
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
    height: 40,
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
