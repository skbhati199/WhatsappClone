import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.log("sending data to backend", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={24} color={"royalblue"} />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="type your message..."
      />

      {/* Sending message button */}
      <Pressable onPress={onSend}>
        <MaterialIcons
          style={styles.send}
          name="send"
          size={24}
          color={"white"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingBottom: 20,
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
