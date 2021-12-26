import React from "react";
import { Text, View } from "react-native";

interface Props {
  navigation: any;
}

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
    </View>
  );
};
