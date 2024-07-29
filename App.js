import { SafeAreaView } from "react-native";
import FlashMessage from "react-native-flash-message";
import ColorsScreen from "./src/screens/ColorsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddColor from "./src/screens/AddColor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <FlashMessage position="top" />
        <Stack.Navigator>
          <Stack.Screen name="Colors" component={ColorsScreen} />
          <Stack.Screen name="AddColor" component={AddColor} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
