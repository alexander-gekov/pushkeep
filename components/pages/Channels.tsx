import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const Channels = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Channels Page</Text>
      </View>
    </View>
  );
};
