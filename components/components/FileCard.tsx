import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import { Icon, Image } from "react-native-elements";

export default function FileCard() {
  return (
    <View
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <View style={styles.PhoneIcon}>
        <Icon
          name="desktop-windows"
          type="material"
          color="white"
          size={18}
        ></Icon>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 7,
          backgroundColor: "rgba(196,196,196,1)",
          marginLeft: 5,
          marginRight: 10,
        }}
      >
        <Icon
          size={18}
          name="description"
          style={{ marginRight: 10 }}
          type="material"
          color="gray"
        ></Icon>
        <Text style={styles.Txt7310}>homework.pdf</Text>
      </View>
      <View style={{ flexDirection: "column", alignSelf: "center" }}>
        <Icon
          style={{ marginBottom: 6 }}
          size={30}
          name="save-alt"
          type="material"
          color="lightgray"
        ></Icon>
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
    alignSelf: "center",
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
    color: "black",
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
