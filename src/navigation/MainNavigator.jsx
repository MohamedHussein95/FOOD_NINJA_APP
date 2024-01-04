import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CartScreen,
  ChatScreen,
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  SearchScreen,
  VoucherPromoScreen,
} from "../screens";
import { BottomTabBar } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={TabStack} />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="notifications"
        component={NotificationsScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="voucher_promo"
        component={VoucherPromoScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
