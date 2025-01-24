import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch('https://jsonhost.com/json/d71dfde6d1d999f495972e076123c7a9')
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        console.log(myJson)
        // let myFilteredData = myJson.filter((item) =>
        //   item.name.includes("sunglasses"));
        // setMyData(myFilteredData);
        setMyData(myJson);
      });
  }, []);

  const renderItem = ({ item, index, section }) => {
    return (
      <View style={styles.itemFrame}>
        <Text style={styles.username}>
          {item.username}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <StatusBar />
        <View style={styles.topFrame}>
          <Text style={styles.title}>
            {`GOLDEN CHANCE\n`}<Text style={{ "textAlign": "center", "color": "rgba(255, 234, 231, 1)", "fontFamily": "Inter", "fontSize": 18, "fontWeight": 500 }}>{`Lucky Draw 2025`}</Text>
          </Text>
          <Text style={styles.desc}>
            {`Your ticket to amazing rewards! Sign up now for a free and exciting lucky draw. Don’t miss your chance to win big 🎉`}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={
              () => { navigation.navigate("Add", { datastr: JSON.stringify(myData) }) }}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      <Text style={styles.luckyDrawEntries}>
        {`LUCKY DRAW ENTRIES`}
      </Text>
      <FlatList data={myData} renderItem={renderItem} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topFrame: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "rgba(255, 69, 46, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 40,
    paddingHorizontal: 40,
    paddingVertical: 40
  },
  title: {
    position: "relative",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 234, 231, 1)",
    fontFamily: "Inter",
    fontSize: 36,
    fontWeight: 700
  },
  desc: {
    position: "relative",
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500
  },
  btn: {
    position: "relative",
    flexShrink: 0,
    width: 332,
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
    fontSize: 20,
    fontWeight: 600
  },
  luckyDrawEntries: {
    height: 24,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 20
  },
  itemFrame: {
    position: "relative",
    alignSelf: "stretch",
    marginHorizontal: 40,
    marginBottom: 12,
    flexShrink: 0,
    borderStyle: "solid",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    alignItems: "center",
    columnGap: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(145, 145, 145, 0.2)",
    borderRadius: 10
  },
  username: {
    position: "relative",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 400
  },
});