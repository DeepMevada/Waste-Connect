import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const detail_props = [
  { label: "    Paper    ", value: "Paper" },
  { label: "    Organic    ", value: "Organic" },
  { label: "    Metal    ", value: "Metal" },
];

const range_props = [
  { label: "   20 - 50 kg   ", value: "20 - 50 kg" },
  { label: "   50 - 100 kg   ", value: "50 - 100 kg" },
  { label: "> 100 kg", value: "More than 100 kg" },
];

export default class BulkWaste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wtype: "",
      wrange: "",
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.stepText}>This is a bulk pickup</Text>
        <Text style={styles.stepText}>Step 1 : Enter Waste Details</Text>
        <View style={styles.container}>
          <Text style={styles.context}>Select your Waste Type</Text>
          <RadioForm
            style={styles.radiobutton}
            radio_props={detail_props}
            initial={0}
            buttonColor={"#00A859"}
            formHorizontal={true}
            labelHorizontal={false}
            animation={false}
            selectedButtonColor={"#00A859"}
            onPress={(value) => {
              this.props.handleWasteChange("wasteType", value);
            }}
          />
          <View
            style={{
              borderBottomColor: StyleSheet.hairlineWidth,
              borderBottomWidth: 2,
              margin: 5,
            }}
          />

          <Text style={styles.context}>Select your Waste Range</Text>
          <Text style={styles.context2}>
            *(Minimum amount of 2kg of waste is reqiured)*
          </Text>

          <RadioForm
            style={styles.radiobutton}
            radio_props={range_props}
            initial={0}
            labelHorizontal={false}
            formHorizontal={true}
            animation={false}
            buttonColor={"#00A859"}
            selectedButtonColor={"#00A859"}
            onPress={(value) => {
              this.props.handleWasteChange("wasteRange", value);
            }}
          />
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
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  context: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "Montserrat",
    padding: 5,
    textAlign: "center",
  },

  context2: {
    fontSize: 15,
    padding: 5,
    textAlign: "center",
  },

  radiobutton: {
    alignSelf: "center",
    padding: 5,
    margin: 5,
  },
});
