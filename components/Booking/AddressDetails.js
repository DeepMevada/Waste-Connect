import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default class AddressDetails extends React.Component {
  state = {
    al1: "",
    al2: "",
    city: "",
    post: "",
  };

  render() {
    return (
      <View>
        <Text style={styles.stepText}>Step 2 : Enter Address Details</Text>
        <View style={styles.container}>
          <Text style={styles.inputLabel}>Address Line 1: </Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            onChangeText={(e) => this.props.handleAddressChange("al1", e)}
            value={this.props.al1}
          />

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputLabel}>Address Line 2: </Text>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              onChangeText={(e) => this.props.handleAddressChange("al2", e)}
              value={this.props.al2}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputLabel}>City: </Text>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              onChangeText={(e) => this.props.handleAddressChange("city", e)}
              value={this.props.city}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputLabel}>Postal Code: </Text>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(e) => this.props.handleAddressChange("post", e)}
              value={this.props.post}
            />
          </View>
        </View>
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
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },

  inputLabel: {
    color: "#8A8F9E",
    fontSize: 15,
    textTransform: "uppercase",
  },
  inputField: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
});
