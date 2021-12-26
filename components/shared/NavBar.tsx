import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: "2%",
        paddingTop: "3%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: "12%",
        width: "100%",
        backgroundColor: "#fff8f8",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="send" type="material" color="#FF056E" />
        <Text>Push</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="bookmark-border" type="material" color="#FF056E" />
        <Text>Saved</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="sms" type="material" color="#FF056E" />
        <Text>SMS</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="rss-feed" type="material" color="#FF056E" />
        <Text>Channels</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="account-circle" type="material" color="#FF056E" />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default NavBar;
