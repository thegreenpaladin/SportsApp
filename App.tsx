import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TabsPane from "./src/screens/TabsPane";
import Cricket from "./src/screens/Cricket";
import Snooker from "./src/screens/Snooker";
import CricketDetails from "./src/screens/CricketDetails";
import SnookerDetails from "./src/screens/SnookerDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={TabsPane} />
          <Stack.Screen name="Cricket" component={Cricket} />
          <Stack.Screen name="Snooker" component={Snooker} />
          <Stack.Screen
            name="CricketDetails"
            component={CricketDetails}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SnookerDetails"
            component={SnookerDetails}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
