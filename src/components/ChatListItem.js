import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("chat", { id: chat.id, name: chat.user.name })
      }
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: chat.user.image,
          }}
        />
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {chat.user.name}
            </Text>
            <Text>{dayjs(chat.lastMessage.createAt).fromNow(true)}</Text>
          </View>
          <Text style={styles.subTitle} numberOfLines={1}>
            {" "}
            {chat.lastMessage.text}{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;
