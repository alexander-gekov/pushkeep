import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import * as Linking from "expo-linking";
import { Icon } from "react-native-elements";

export default function LinkCard() {
  return (
    <View
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.PhoneIcon}>
        <Icon name="smartphone" type="material" color="white" size={21}></Icon>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 7,
          backgroundColor: "rgba(196,196,196,1)",
          marginLeft: 5,
          marginRight: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.Txt548}>
            20 best tailwind landing page templates
          </Text>
        </View>
        <Text
          style={styles.Txt7310}
          onPress={() => Linking.openURL("https://www.pushkeep.com")}
        >
          https://www.pushkeep.com
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Icon
          style={{ marginBottom: 6 }}
          size={30}
          name="share"
          type="material"
          color="lightgray"
        ></Icon>
        <Icon size={30} name="delete" type="material" color="lightgray"></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PhoneIcon: {
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 4,
    paddingRight: 5,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "rgba(100,100,100,1)",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  Container: {},
  Group3: {
    display: "flex",
    flexDirection: "column",
  },
  Txt548: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginBottom: 6,
  },
  Txt7310: {
    fontSize: 16,
    fontWeight: "400",
    color: "blue",
    textDecorationLine: "underline",
  },
  Group035: {
    display: "flex",
    flexDirection: "column",
  },
  Delete: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  Share: {
    width: 24,
    height: 24,
  },
});
