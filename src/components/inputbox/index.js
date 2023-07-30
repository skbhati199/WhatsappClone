import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={24} color={"royalblue"} />

      {/* Text Input */}
      <TextInput style={styles.input} placeholder="type your message..." />

      <MaterialIcons
        style={styles.send}
        name="send"
        size={24}
        color={"white"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    height: '10%',
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default InputBox;
