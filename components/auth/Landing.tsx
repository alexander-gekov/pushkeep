import React from "react";
import { Text, View, Button } from "react-native";

interface Props {
  navigation: any;
}

export const Landing = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => props.navigation.navigate("Register")}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};
