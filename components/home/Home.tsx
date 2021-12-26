import React from "react";
import { Text, View } from "react-native";
import NavBar from "../shared/NavBar";

interface Props {}

export const Home = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Page</Text>
      </View>
      <NavBar></NavBar>
    </View>
  );
};
