import { Platform, StyleSheet, Text, View } from "react-native";

import ChatScreen from "../screens/ChatScreen";
import ChatsScreen from "../screens/ChatsScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Chats",
          }}
          name="chats"
          component={ChatsScreen}
        />
        <Stack.Screen name="chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
