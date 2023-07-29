import ChatListItem from "../components/ChatListItem";
import { FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const chats = [
  {
    id: 1,
    user: {
      image:
        "https://images.unsplash.com/photo-1690301196394-ef7fcfa9535b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "sonu kumar",
    },
    lastMessage: {
      text: "Okey",
      createAt: "07:40",
    },
  },
];

const ChatsScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;
