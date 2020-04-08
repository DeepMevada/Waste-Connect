import React from "react"
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"
import * as firebase from "firebase"

export default class home extends React.Component {
    state = {
        displayName: "",
        email: ""
    };

    componentDidMount(){
        const {email,displayName} = firebase.auth().currentUser
        this.setState({email,displayName})
    };

    signOutUser = () => {
        firebase.auth().signOut()
    };
    render() {
        return(
            <View style = {styles.container}>
                <Text>Hi {this.state.displayName}</Text>

                <TouchableOpacity style = {{marginTop: 30}} onPress = {this.signOutUser}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems : "center",
    }
})