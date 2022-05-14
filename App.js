import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useFonts as useDosis,
  Dosis_400Regular,
  Dosis_700Bold,
} from "@expo-google-fonts/dosis";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { ProductsScreen } from "./src/features/products/screens/products.screen";
import { StatsScreen as Stats } from "./src/features/stats/screens/stats.screen";

import { ProductsContextProvider } from "./src/services/products/products.context";

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Product Info" component={ProductInfoScreen} />
      <Stack.Screen name="Process" component={ProcessScreen} />
    </Stack.Navigator>
  );
};

const ProductInfoScreen = () => {
  return (
    <SafeArea>
      <Text>Product Info Screen</Text>
    </SafeArea>
  );
};

const ProcessScreen = () => {
  return (
    <SafeArea>
      <Text>Process Screen</Text>
    </SafeArea>
  );
};

const ProductScreen = () => {
  return <ProductsScreen />;
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
};

const StatsScreen = () => {
  return (
    <Stats />
    // <SafeArea>
    //   <Text>Stats Screen</Text>
    //   <Text>Isn't this cool???</Text>
    // </SafeArea>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [dosisLoaded] = useDosis({
    Dosis_400Regular,
    Dosis_700Bold,
  });

  if (!dosisLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Products") {
                  iconName = focused ? "ios-shirt" : "ios-shirt-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-settings" : "ios-settings-outline";
                } else if (route.name === "Stats") {
                  iconName = focused ? "ios-shuffle" : "ios-shuffle-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#2182BD",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="Products" component={ProductStack} />
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
          <ExpoStatusBar style="auto" />
        </NavigationContainer>
      </ProductsContextProvider>
    </ThemeProvider>
  );
}
