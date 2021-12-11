import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import firebase, { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { Landing } from "./components/auth/Landing";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { View, Text } from "react-native";
const firebaseConfig = {
  apiKey: "AIzaSyDKoi2J8vfpHAL60qH6dRVMNHSyTplHRd8",
  authDomain: "test-efd7f.firebaseapp.com",
  databaseURL: "https://test-efd7f.firebaseio.com",
  projectId: "test-efd7f",
  storageBucket: "test-efd7f.appspot.com",
  messagingSenderId: "153181300683",
  appId: "1:153181300683:web:927e728a45ca521f1bf84e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
interface Props {}
interface State {
  loggedIn: boolean;
  loaded: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { loaded: false, loggedIn: false };
  }
  componentDidMount() {
    const auth = initializeAuth(app);
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loggedIn: false, loaded: true });
      } else {
        this.setState({ loggedIn: true, loaded: true });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User is logged in</Text>
      </View>
    );
  }
}

export default App;
