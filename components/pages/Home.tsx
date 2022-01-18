import React, { useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useHeaderHeight } from "@react-navigation/elements";
import Card from "../components/Card";
import * as DocumentPicker from "expo-document-picker";

const pickDocument = async () => {
  let result = await DocumentPicker.getDocumentAsync({});
  console.log(result);
};

interface Props {}

export const Home = (props: Props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([] as string[]);
  const headerHeight = useHeaderHeight();

  const push = () => {
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Card message={item}></Card>}
        showsVerticalScrollIndicator={true}
        indicatorStyle="black"
        keyboardDismissMode="on-drag"
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          marginTop: 10,
          paddingHorizontal: "4%",
        }}
      >
        <TouchableWithoutFeedback onPress={pickDocument}>
          <Icon
            style={{ transform: [{ rotate: "45deg" }] }}
            name="attach-file"
            type="material"
            size={30}
            color="gray"
          ></Icon>
        </TouchableWithoutFeedback>
        <View style={{ flex: 1 }}>
          <Input
            value={message}
            placeholder="Message"
            style={{ height: 40 }}
            inputContainerStyle={{
              backgroundColor: "white",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              paddingHorizontal: 15,
            }}
            onChangeText={(value) => setMessage(value)}
          />
          <TouchableOpacity style={{ position: "absolute", right: 10, top: 1 }}>
            <Button
              onPress={push}
              buttonStyle={{
                backgroundColor: "#FF056E",
                borderRadius: 100,
                height: 40,
              }}
              containerStyle={{ width: 40, height: 40 }}
              iconContainerStyle={{ marginLeft: 5 }}
              icon={<Icon name="arrow-upward" type="material" color="white" />}
            ></Button>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
