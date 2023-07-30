import ChatListItem from "../components/ChatListItem";
import { FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import chats from "../../assets/data/chats.json";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem key={item.id} chat={item} />}
    />
  );
};

export default ChatsScreen;
