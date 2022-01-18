import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import Amplify, { Auth, Hub } from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { Authenticator, ConfirmSignUp } from "aws-amplify-react-native";
import NavigationStack from "./NavigationStack";
import { SignIn } from "./components/auth/SignIn";
import AppContext from "./utils/AppContext";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = ({ navigation }: any) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          setUserId(data.signInUserSession.accessToken.payload.sub);
          break;
        case "signOut":
          setUser(null);
          break;
      }
    });
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        if (user) {
          setUserId(user.attributes.sub);
        }
      })
      .catch(() => console.log("Not signed in"));
  }, []);

  return user ? (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContext.Provider value={{ userId, setUserId }}>
          <NavigationStack />
          <StatusBar style="dark" />
        </AppContext.Provider>
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
