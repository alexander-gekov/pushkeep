import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import * as auth from "firebase/auth";
interface Props {}
interface State {
  email: string;
  password: string;
  name: string;
}

class Register extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp = () => {
    const { email, password, name } = this.state;
    auth
      .createUserWithEmailAndPassword(auth.getAuth(), email, password)
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
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={() => this.onSignUp()} title="Sign up" />
      </View>
    );
  }
}

export default Register;
