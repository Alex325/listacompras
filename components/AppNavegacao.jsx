import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Text } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Formulario from "./Formulario";
import Lista from "./Lista";

const Tab = createBottomTabNavigator();



export default function AppNavegacao() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#0b134a",
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "lightgray",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Lista"
          component={Lista}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              iconName = focused ? "view-list" : "view-list-outline";
              size = focused ? size * 1.5 : size;
              // Retornando a imagem
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarLabel: ({ focused, color }) =>
              focused ? <></> : <Text style={{ color: color }}>Lista</Text>,
          }}
        />
        <Tab.Screen
          name="Formulario"
          component={Formulario}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              iconName = focused ? "clipboard" : "clipboard-outline";
              size = focused ? size * 1.5 : size;
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarLabel: ({ focused, color }) =>
              focused ? <></> : <Text style={{ color: color }}>Formulário</Text>,
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
