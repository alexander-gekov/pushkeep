import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const SMS = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>SMS Page</Text>
      </View>
    </View>
  );
};
