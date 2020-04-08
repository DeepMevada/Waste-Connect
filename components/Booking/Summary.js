import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.stepText}>Summary</Text>
        <Text style={styles.stepText}>
          wastetype: {this.props.data.wastetype}{" "}
        </Text>
        <Text style={styles.stepText}>
          wasterange: {this.props.data.wasterange}{" "}
        </Text>
        <Text style={styles.stepText}>al1: {this.props.data.al1} </Text>
        <Text style={styles.stepText}>al2: {this.props.data.al2} </Text>
        <Text style={styles.stepText}>city: {this.props.data.city} </Text>
        <Text style={styles.stepText}>post: {this.props.data.post} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stepText: {
    margin: 5,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
