import React from "react";
import { Text, View } from "react-native";
import LinkCard from "../components/LinkCard";

interface Props {
  navigation: any;
}

export const Saved = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Saved Page</Text>
      </View>
    </View>
  );
};
