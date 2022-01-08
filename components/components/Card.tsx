import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

interface Props {
  message: {
    text: string;
    sender: string;
    createdAt: string;
  };
}

const Card = (props: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginRight: 10,
        }}
      >
        <Icon name="phone-iphone" type="material"></Icon>
      </View>
      <View
        style={{
          backgroundColor: "lightgray",
          flex: 1,
          flexDirection: "row",
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text style={{ display: "flex", flexWrap: "wrap" }}>
          {props.message.text}
        </Text>
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <Icon name="delete" type="material"></Icon>
      </View>
    </View>
  );
};

export default Card;
