import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Dashboard, Diary, Newsfeed, AddBlogForm, EditBlogForm } from '../screens';
import { MenuBoard, Book1, CalendarTick } from 'iconsax-react-native';
import { fontType, colors } from '../themes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.white(),
        tabBarInactiveTintColor: colors.white(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
          backgroundColor: '#687EFF',
          gap: 1,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
        tabBarLabelStyle: {
          marginTop: 1,
          fontSize: 10,
          fontFamily: fontType['Pjs-large'],
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ focused, color }) => (
            <MenuBoard color={color} variant={focused ? 'Bold' : 'Linear'} size={35} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({ focused, color }) => (
            <CalendarTick color={color} variant={focused ? 'Bold' : 'Linear'} size={35} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={{
          tabBarLabel: 'Newsfeed',
          tabBarIcon: ({ focused, color }) => (
            <Book1 color={color} variant={focused ? 'Bold' : 'Linear'} size={35} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddBlog"
        component={AddBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditBlog"
        component={EditBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
