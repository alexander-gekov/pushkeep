import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { Home } from "../pages/Home";
import { Saved } from "../pages/Saved";
import { SMS } from "../pages/SMS";
import { Channels } from "../pages/Channels";
import { Profile } from "../pages/Profile";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FF056E",
      }}
    >
      <Tab.Screen
        name="Push"
        component={Home}
        options={{
          headerTitle: "Push",
          tabBarIcon: ({ color }) => (
            <Icon name="send" type="material" color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerTitle: "Saved",
          tabBarIcon: ({ color }) => (
            <Icon name="bookmark-border" type="material" color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="SMS"
        component={SMS}
        options={{
          headerTitle: "SMS",
          tabBarIcon: ({ color }) => (
            <Icon name="sms" type="material" color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Channels"
        component={Channels}
        options={{
          headerTitle: "Channels",
          tabBarIcon: ({ color }) => (
            <Icon name="rss-feed" type="material" color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" type="material" color={color}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
