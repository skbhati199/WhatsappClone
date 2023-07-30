import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import InputBox from "../components/inputbox";
import Message from "../components/Message";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: route.params.name });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
export default ChatScreen;
