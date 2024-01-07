import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CallScreen,
  CartScreen,
  ChatListScreen,
  ChatScreen,
  HomeScreen,
  NotificationsScreen,
  OrderDetailsScreen,
  PaymentScreen,
  ProfileScreen,
  RatingScreen,
  RestaurantDetailsScreen,
  SearchScreen,
  ShippingScreen,
  VoucherPromoScreen,
} from "../screens";
import { BottomTabBar } from "../components";
import ConfirmOrderScreen from "../screens/ConfirmOrderScreen";

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
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{ tabBarBadge: 7 }}
      />
      <Tab.Screen
        name="chat_list"
        component={ChatListScreen}
        options={{ tabBarLabel: "chat" }}
      />
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
      <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="call"
        component={CallScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="rating"
        component={RatingScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="order_details" component={OrderDetailsScreen} />
      <Stack.Screen name="confirm_order" component={ConfirmOrderScreen} />
      <Stack.Screen
        name="payment"
        component={PaymentScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="shipping"
        component={ShippingScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="restaurant"
        component={RestaurantDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
