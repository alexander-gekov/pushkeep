import React from "react";
import { ScrollView, Text, View } from "react-native";
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
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            marginTop: 15,
            marginHorizontal: 15,
          }}
        >
          <LinkCard></LinkCard>
        </ScrollView>
      </View>
    </View>
  );
};
