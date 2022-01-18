import React, { useState } from "react";
import { Text, View, ActivityIndicator, Linking, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native-elements";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { ScreenWidth } from "react-native-elements/dist/helpers";
Amplify.configure(awsconfig);

export const SignIn = (props: any) => {
  return (
    <View
      style={{
        position: "relative",
        flex: 1,
        marginBottom: "20%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -50,
        }}
      >
        <Image
          source={require("../../assets/background.png")}
          style={{ height: 300, width: ScreenWidth }}
          PlaceholderContent={<ActivityIndicator />}
        ></Image>
        <View
          style={{
            height: 130,
            width: 130,
            backgroundColor: "#fff",
            borderRadius: 30,
            shadowOpacity: 0.5,
            shadowColor: "#810E2A",
            shadowOffset: { width: 0, height: 5 },
            position: "absolute",
            top: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/logo2_1000x1000.png")}
            PlaceholderContent={<ActivityIndicator />}
          ></Image>
        </View>
        <Text style={{ marginTop: 30, fontSize: 32 }}>Welcome to</Text>
        <Text style={{ marginTop: 10, fontSize: 56, fontWeight: "700" }}>
          PushKeep
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          maxWidth: "75%",
          alignSelf: "center",
        }}
      >
        <Icon.Button
          style={{
            height: 50,
            width: 250,
            justifyContent: "center",
            borderWidth: 1,
          }}
          name="google"
          color="#000"
          backgroundColor="#fff"
          onPress={() => {
            try {
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              }).then((user) => {
                console.log("signed in");
              });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Sign in with Google
          </Text>
        </Icon.Button>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15%",
          maxWidth: "75%",
          alignSelf: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          By singing in you accept our{" "}
          <Text
            onPress={() =>
              Linking.openURL("http://pushkeep.com/terms-conditions")
            }
            style={{ color: "blue" }}
          >
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text
            onPress={() =>
              Linking.openURL("http://pushkeep.com/privacy-policy")
            }
            style={{ color: "blue" }}
          >
            Privacy policy
          </Text>
          .
        </Text>
      </View>
    </View>
  );
};
