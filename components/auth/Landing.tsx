import React, { useEffect, useState } from "react";
import { Text, View, Alert, ActivityIndicator, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AppleAuthentication from "expo-apple-authentication";
import { Button, Image } from "react-native-elements";

interface Props {
  navigation: any;
}

WebBrowser.maybeCompleteAuthSession();

export const Landing = (props: Props) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "619586198793-jqn909j3vibfu6ra8t95rvan4julheaq.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      props.navigation.navigate("Home");
      console.log(response);
    }
  }, [response]);

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
        }}
      >
        <Image
          source={require("../../assets/background.png")}
          style={{ height: 300, width: 390 }}
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
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Sign in with Google
          </Text>
        </Icon.Button>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ width: 250, height: 50 }}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              console.log(credential);
              props.navigation.navigate("Home");
            } catch (e: any) {
              console.log(e);
            }
          }}
        />
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
