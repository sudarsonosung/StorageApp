import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";

class UserList extends Component {
  state = {
    name: "",
    phone: ""
  };

  componentDidMount() {
    this.getDataUsers();
  }

  getDataUsers = () => {
    var usersRef = firebase.database().ref("Users/");
    usersRef.on("value", function(snapshot) {
      console.log("snapshot : ", snapshot);
      console.log("snapshot.val : ", snapshot.val());
    //   const { name, phone } = snapshot.val();
    //   if (name && name !== "") {
    //     this.setState({ name });
    //   }

    //   if (phone && phone !== "") {
    //     this.setState({ phone });
    //   }
    });
  };

  render() {
    return (
      <View>
        <Text>Name : {this.state.name}</Text>
        <Text>Phone : {this.state.phone}</Text>
      </View>
    );
  }
}

export default UserList;
