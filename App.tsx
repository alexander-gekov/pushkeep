import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Landing } from "./components/auth/Landing";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, ThemeProvider } from "react-native-elements";
import { Home } from "./components/home/Home";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: "Push",
                headerBackVisible: false,
                headerRight: () => (
                  <Icon
                    name="more-horiz"
                    type="material"
                    color="#1982FC"
                  ></Icon>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
