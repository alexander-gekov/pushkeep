import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function LinkCard() {
  return (
    <View style={styles.LinkCard}>
      <View style={styles.Group424}>
        <View style={styles.PhoneIcon}>
          <Image
            style={styles.Phone_android}
            source={{
              uri: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22dc/4f82/3192a8c13371eb0b0d986216d066fb65",
            }}
          />
        </View>
        <View style={styles.Container}>
          <View style={styles.Group3}>
            <Text style={styles.Txt548}>
              20 best tailwind landing page templates
            </Text>
            <Text style={styles.Txt7310}>https://www.pushkeep.com</Text>
          </View>
        </View>
        <View style={styles.Group035}>
          <Image
            style={styles.Delete}
            source={{
              uri: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f00/ce49/f093d7bdc20087368de3cbb943ce7aa9",
            }}
          />
          <Image
            style={styles.Share}
            source={{
              uri: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3e9/c930/cc601505a77eec30f605487364a297f8",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LinkCard: {
    width: "342px",
    height: "79px",
  },
  Group424: {
    display: "flex",
    flexDirection: "row",
  },
  PhoneIcon: {
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 4,
    paddingRight: 5,
    marginRight: "10px",
    borderRadius: 100,
    backgroundColor: "rgba(100,100,100,1)",
    width: "32px",
    height: "32px",
  },
  Phone_android: {
    width: "21px",
    height: "21px",
  },

  Container: {
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 7,
    marginRight: "6px",
    borderRadius: 7,
    backgroundColor: "rgba(196,196,196,1)",
    width: "270px",
    height: "79px",
  },
  Group3: {
    display: "flex",
    flexDirection: "column",
  },
  Txt548: {
    fontSize: 18,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    width: "250px",
    marginBottom: "6px",
  },
  Txt7310: {
    fontSize: 14,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: "250px",
    textDecorationLine: "underline",
  },

  Group035: {
    display: "flex",
    flexDirection: "column",
  },
  Delete: {
    width: "24px",
    height: "24px",
    marginBottom: "6px",
  },
  Share: {
    width: "24px",
    height: "24px",
  },
});
