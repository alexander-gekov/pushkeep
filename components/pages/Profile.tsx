import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Auth } from "aws-amplify";

interface Props {}

export const Profile = (props: Props) => {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", marginVertical: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            padding: 30,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 25,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            }}
          />
          <View
            style={{
              display: "flex",
              maxHeight: 100,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
              Victoria Smith
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 15,
                textDecorationLine: "underline",
              }}
            >
              victoria.smith@yahoo.com
            </Text>
            <View
              style={{
                backgroundColor: "#FF95AE",
                borderRadius: 10,
                height: 20,
                width: 120,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "#FF056E" }}>
                PushKeep Premium
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={signOut}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#e8e8e8" : "white",
            },
            {
              height: 40,
              width: "90%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ fontSize: 20, color: "#FF0800" }}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};
