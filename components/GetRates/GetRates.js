import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";

const detail_props = [
  { label: "    Paper    ", value: "paper" },
  { label: "    Organic    ", value: "organic" },
  { label: "    Metal    ", value: "metal" },
];
const rates = [{ paper: 17.65 }, { organic: 10 }, { metal: 12 }];

export default class GetRates extends React.Component {
  state = {
    wtype: "",
    showRate: false,
  };

  handleChange = (values) => {
    this.setState({ wtype: values });
  };

  getRates = () => {
    this.setState({ showRate: true });
  };

  rates = () => {
    if (this.state.showRate) {
      if (this.state.wtype === "paper") {
        return (
          <View style={{ textAlign: "center" }}>
            <Text> Current Rate of Paper </Text>
            <Text> Rs. 2.75 </Text>
          </View>
        );
      } else if (this.state.wtype === "organic") {
        return (
          <View style={{ textAlign: "center" }}>
            <Text> Current Rate of Organic </Text>
            <Text> Rs. 3.34 </Text>
          </View>
        );
      } else if (this.state.wtype === "metal") {
        return (
          <View style={{ textAlign: "center" }}>
            <Text> Current Rate of Metal </Text>
            <Text> Rs. 3.56 </Text>
          </View>
        );
      } else {
        return (
          <View style={{ textAlign: "center" }}>
            <Text style={{ color: "green" }}> Please select a waste type </Text>
          </View>
        );
      }
    } else return null;
  };

  render() {
    return (
      <View style={{ top: 50 }}>
        <View style={styles.container}>
          <Text style={styles.context}>Select your Waste Type</Text>
          <RadioForm
            style={styles.radiobutton}
            radio_props={detail_props}
            initial={-1}
            buttonColor={"#00A859"}
            formHorizontal={true}
            labelHorizontal={false}
            selectedButtonColor={"#00A859"}
            animation={false}
            onPress={(value) => {
              this.handleChange(value);
            }}
          />
          <View
            style={{
              borderBottomColor: StyleSheet.hairlineWidth,
              borderBottomWidth: 2,
              margin: 5,
            }}
          />
          <View style={styles.btncontainer}>
            <TouchableOpacity style={styles.btns} onPress={this.getRates}>
              <Text style={styles.btnText}>Get Rates</Text>
            </TouchableOpacity>
          </View>
          <View>{this.rates()}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  btncontainer: {
    margin: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  context: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "Montserrat",
    padding: 5,
    textAlign: "center",
  },
  radiobutton: {
    alignSelf: "center",
    padding: 5,
    margin: 5,
  },
  btns: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    width: 150,
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
