import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import * as firebase from 'firebase';

export default class Dashboard extends React.Component {
  state = {
    displayName: '',
    email: '',
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    //this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.main}>
        <Text>Welcome {this.state.displayName}</Text>
        <View style={styles.verticalayout}>
          <View style={styles.cardlayout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Book A Pickup')}>
              <Card>
                <Text style={styles.textmain}>BOOK A PICKUP</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Get Rates')}>
              <Card>
                <Text style={styles.textmain}>GET RATES</Text>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.cardlayout}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Bulk Pickup')}>
              <Card>
                <Text style={styles.textmain}>BULK PICKUP</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Contact')}>
              <Card>
                <Text style={styles.textmain}>CONTACT</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={this.signOutUser}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalayout: {
    flexDirection: 'row',
  },
  cardlayout: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textmain: {
    textAlign: 'center',
    fontSize: 24,
  },
});
