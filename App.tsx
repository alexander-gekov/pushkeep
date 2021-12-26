import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Landing } from "./components/auth/Landing";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, ThemeProvider } from "react-native-elements";
import { Home } from "./components/pages/Home";
import { useColorScheme } from "react-native";
import { Saved } from "./components/pages/Saved";
import { SMS } from "./components/pages/SMS";
import { Channels } from "./components/pages/Channels";
import { Profile } from "./components/pages/Profile";
import NavBar from "./components/shared/NavBar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="NavBar">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NavBar"
              component={NavBar}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
