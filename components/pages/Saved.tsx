import React from "react";
import { Dimensions, Platform, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import FileCard from "../components/FileCard";
import ImageCard from "../components/ImageCard";
import LinkCard from "../components/LinkCard";
import TextCard from "../components/TextCard";

interface Props {
  navigation: any;
}

export const Saved = (props: Props) => {
  const { height } = Dimensions.get("screen");

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginVertical: 15,
          marginHorizontal: 15,
        }}
      >
        <Divider
          subHeaderStyle={{ marginBottom: 15, fontSize: 14, color: "gray" }}
          subHeader="Jan 10, 8:03 PM"
        ></Divider>
        <LinkCard></LinkCard>
        <ImageCard></ImageCard>
        <Divider
          subHeaderStyle={{
            marginBottom: 20,
            marginTop: 10,
            fontSize: 14,
            color: "gray",
          }}
          subHeader="Jan 12, 10:21 AM"
        ></Divider>
        <TextCard></TextCard>
        <FileCard></FileCard>
        <LinkCard></LinkCard>
        <Divider
          subHeaderStyle={{
            marginBottom: 20,
            marginTop: 10,
            fontSize: 14,
            color: "gray",
          }}
          subHeader="Jan 13, 11:14 AM"
        ></Divider>
        <TextCard></TextCard>
        <TextCard></TextCard>
      </View>
    </ScrollView>
  );
};
