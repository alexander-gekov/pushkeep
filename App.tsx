import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Landing } from "./components/auth/Landing";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import NavBar from "./components/shared/NavBar";
import Amplify from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";

Amplify.configure(config);

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

export default withAuthenticator(App);
