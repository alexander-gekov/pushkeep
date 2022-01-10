import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/shared/NavBar";

const AuthenticatorStack = createNativeStackNavigator();

const NavigationStack = (props: any) => {
  return (
    <NavigationContainer>
      <AuthenticatorStack.Navigator initialRouteName="NavBar">
        <AuthenticatorStack.Screen
          name="NavBar"
          component={NavBar}
          options={{ headerShown: false }}
        />
      </AuthenticatorStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
