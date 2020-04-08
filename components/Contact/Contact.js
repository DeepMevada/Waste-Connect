import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class Contact extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Get In Touch with Us</Text>
          <View style={styles.subText}>
            <Text>Email</Text>
            <Text style={styles.text}>help@email.com</Text>
          </View>
          <View style={styles.subText}>
            <Text>Mobile</Text>
            <Text style={styles.text}>9999999999</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#e5e5e5",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 40,
    paddingTop: 70,
    paddingBottom: 70,
  },
  headerText: {
    fontSize: 25,
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: 15,
  },
  subText: {
    alignItems: "center",
    padding: 10,
  },
});
