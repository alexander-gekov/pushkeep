import React from "react";
import { Text, View } from "react-native";

interface Props {}

export const Profile = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile Page</Text>
      </View>
    </View>
  );
};
