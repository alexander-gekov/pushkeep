import React, { useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Auth } from "aws-amplify";

export const Profile = (props: any) => {
  const [user, setUser] = useState({ email: "", name: "", picture: "" });

  useEffect(() => {
    try {
      Auth.currentAuthenticatedUser().then((user) => setUser(user));
      Auth.currentSession().then((session) =>
        setUser({
          email: session.getIdToken().payload.email,
          name: session.getIdToken().payload.name,
          picture:
            session
              .getIdToken()
              .payload.picture.substring(
                0,
                session.getIdToken().payload.picture.length - 5
              ) + "s500",
        })
      );
    } catch (e) {
      Auth.signOut({ global: true });
    }
  }, []);

  const signOut = () => {
    Auth.signOut({ global: true });
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
              uri:
                user.picture ||
                "https://www.contextbv.com/wp-content/uploads/2020/03/Person-placeholder.jpg",
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
              {user.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 15,
                textDecorationLine: "underline",
              }}
            >
              {user.email}
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
function substring(picture: string): string | undefined {
  throw new Error("Function not implemented.");
}
