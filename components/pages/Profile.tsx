import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsConfig from "../../src/aws-exports";
import { User } from "../../src/models";
import { getUser } from "../../src/graphql/queries";
import AppContext from "../../utils/AppContext";

Amplify.configure(awsConfig);

export const Profile = (props: any) => {
  const [user, setUser] = useState({} as User);
  const { userId } = useContext(AppContext);

  const fetchUser = async (id: string) => {
    try {
      const response = await API.graphql(graphqlOperation(getUser, { id: id }));
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      //fetch user
      fetchUser(userId).then((response) => {
        if (response) {
          // @ts-ignore
          const user = response.data.getUser as User;
          setUser(user);
        }
      });
    } catch (e) {
      console.log(e);
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
                user.imageUri ||
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
                backgroundColor: "#54B8F0",
                borderRadius: 10,
                height: 20,
                width: 120,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "#0D3EEE" }}>
                {user.membership ? "PushKeep Premium" : "PushKeep Free"}
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
