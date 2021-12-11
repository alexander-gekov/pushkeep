import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import * as auth from "firebase/auth";
interface Props {}
interface State {
  email: string;
  password: string;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn = () => {
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(auth.getAuth(), email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={() => this.onSignIn()} title="Sign in" />
      </View>
    );
  }
}

export default Login;
