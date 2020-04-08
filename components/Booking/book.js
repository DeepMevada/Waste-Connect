import React, { useReducer, useContext } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import WasteDetails from "./WasteDetails";
import AddressDetails from "./AddressDetails";
import Summary from "./Summary";
import * as firebase from "firebase";

export default class book extends React.Component {
  state = {
    step: 1,
    wastetype: "paper",
    wasterange: "2 - 5 kg",
    city: "",
    al1: "",
    al2: "",
    post: 0,
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go back one step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Button for previous step
  previousButton() {
    let currentStep = this.state.step;
    if (currentStep !== 1) {
      return (
        <TouchableOpacity style={styles.btns} onPress={this.prevStep}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  //Button for next step
  nextButton() {
    let currentStep = this.state.step;
    if (currentStep < 3) {
      return (
        <TouchableOpacity style={styles.btns} onPress={this.nextStep}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  submitOrder = () => {
    var user = firebase.auth().currentUser;
    var userId;
    if (user != null) {
      userId = user.uid;
    }

    var newPostKey = firebase.database().ref().child("users").push().key;

    var orderdata = {
      WasteType: this.state.wastetype,
      WasteRange: this.state.wasterange,
      AddFirstLine: this.state.al1,
      AddSecondLine: this.state.al2,
      City: this.state.city,
      Postal: this.state.post,
      requestStatus: false,
    };

    var update = {};

    update["/pickup" + newPostKey] = orderdata;

    firebase
      .database()
      .ref("users/" + userId + "/orders")
      .update(update);
    this.props.navigation.navigate("Dashboard");
  };

  submitButton() {
    let currentStep = this.state.step;
    if (currentStep == 3) {
      return (
        <TouchableOpacity style={styles.btns} onPress={this.submitOrder}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  //handle input change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleWasteChange = (property, value) => {
    const that = this;
    if (property === "wasteType") {
      that.setState({ wastetype: value });
    } else if (property === "wasteRange") {
      that.setState({ wasterange: value });
    }
  };

  handleAddressChange = (property, value) => {
    const that = this;
    if (property === "al1") {
      that.setState({ al1: value });
    }
    if (property === "al2") {
      that.setState({ al2: value });
    }
    if (property === "city") {
      that.setState({ city: value });
    }
    if (property === "post") {
      that.setState({ post: value });
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.maincontent}>
          {this.state.step == 1 ? (
            <WasteDetails
              handleWasteChange={this.handleWasteChange}
              wastetype={this.state.wastetype}
              wasterange={this.state.wasterange}
            />
          ) : this.state.step == 2 ? (
            <AddressDetails
              handleAddressChange={this.handleAddressChange}
              al1={this.state.al1}
              al2={this.state.al2}
              city={this.state.city}
              post={this.state.post}
            />
          ) : (
            <Summary data={this.state} />
          )}
          <View style={styles.btncontainer}>
            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btncontainer: {
    margin: "auto",
    top: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  maincontent: {
    top: 50,
  },

  btns: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    width: 120,
    backgroundColor: "#00A859",
    borderRadius: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "#fff",
  },

  btnText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: "#fff",
    fontSize: 16,
  },
});
