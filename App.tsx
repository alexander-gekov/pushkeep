import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import Amplify, { Auth, Hub } from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { Authenticator } from "aws-amplify-react-native";
import NavigationStack from "./NavigationStack";
import { SignIn } from "./components/auth/SignIn";

Amplify.configure(config);

const App = ({ navigation }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          console.log(data);
          break;
        case "signOut":
          setUser(null);
          break;
      }
    });
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);

  return user ? (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationStack />
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  ) : (
    <Authenticator authState="signIn" hideDefault={true}>
      <SignIn></SignIn>
      <StatusBar backgroundColor="#FF0743"></StatusBar>
    </Authenticator>
  );
};

export default App;
