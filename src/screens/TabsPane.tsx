import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cricket from "./Cricket";
import Snooker from "./Snooker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function TabsPane() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cricket"
        component={Cricket}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cricket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Snooker"
        component={Snooker}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="billiards-rack"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsPane;
