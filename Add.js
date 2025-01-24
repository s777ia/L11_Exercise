import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Add = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.androidCompact1Container}>
      <TextInput
        placeholder='Username'
        style={styles.username}
        onChangeText={(text) => setUsername(text)} />
      <TextInput
        placeholder='Email'
        style={styles.email}
        onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder='Mobile Number'
        style={styles.mobilenumber}
        onChangeText={(text) => setPhone(text)} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          let myData = JSON.parse(route.params.datastr);
          let item = {
            username: username,
            email: email,
            phone: phone
          }
          myData.push(item);
          fetch('https://jsonhost.com/json/d71dfde6d1d999f495972e076123c7a9',
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "s8euwzgztr7nlvr8qcf0o43dwx3v73ri"
              },
              body: JSON.stringify(myData)
            })
          .then((res) => {
            navigation.navigate("Home"); // Navigate only after the fetch completes
          })
        }}>
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  androidCompact1Container: {
    position: "relative",
    flexShrink: 0,
    height: 917,
    width: 412,
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 0
  },
  username: {
    position: "absolute",
    flexShrink: 0,
    top: 308,
    left: 40,
    right: 40,
    backgroundColor: "rgba(245, 245, 245, 0.96)",
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 10
  },
  email: {
    position: "absolute",
    flexShrink: 0,
    top: 380,
    left: 40,
    right: 40,
    backgroundColor: "rgba(245, 245, 245, 0.96)",
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 10
  },
  mobilenumber: {
    position: "absolute",
    flexShrink: 0,
    top: 452,
    left: 40,
    right: 40,
    backgroundColor: "rgba(245, 245, 245, 0.96)",
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 10
  },
  mobileNumber: {
    position: "relative",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(145, 145, 145, 1)",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 500
  },
  btn: {
    position: "absolute",
    flexShrink: 0,
    top: 554,
    left: 40,
    right: 40,
    backgroundColor: "rgba(0, 0, 0, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 10
  },
  signUp: {
    position: "relative",
    flexShrink: 0,
    textAlign: "center",
    color: "#f5f5f5",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 600
  }
});