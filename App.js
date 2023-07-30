import Navigator from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
