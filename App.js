import { Platform, StyleSheet, Text, View } from "react-native";

import ChatScreen from "./src/screens/ChatScreen";
import ChatsScreen from "./src/screens/ChatsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{
            headerShown: false,
            headerStatusBarHeight: 10,
          }}
          name="ChatScren"
          component={ChatScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerStatusBarHeight: 10,
          }}
          name="ChatsScren"
          component={ChatsScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
