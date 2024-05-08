import React from 'react';

import {View, Image, Platform} from 'react-native';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {COLORS, icons} from '../../global';
import {Ionicons} from '@expo/vector-icons';
import Home from '../../screens/Home';
import {Test} from '../../screens/Test';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 90 : 60,
        backgroundColor: COLORS.white,
    },
} as BottomTabNavigationOptions;

export function BottomTabNavigation() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="DrawerHome"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={
                                    focused ? icons.home : icons.homeOutline
                                }
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Orders"
                component={Test}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={
                                    focused
                                        ? icons.shoppingBag
                                        : icons.shoppingBagOutline
                                }
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Add"
                component={Test}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.primary,
                                    height: Platform.OS === 'ios' ? 70 : 60,
                                    width: Platform.OS === 'ios' ? 70 : 60,
                                    top: Platform.OS === 'ios' ? -20 : -30,
                                    borderRadius:
                                        Platform.OS === 'ios' ? 35 : 30,
                                    borderWidth: 2,
                                    borderColor: COLORS.white,
                                }}>
                                <Ionicons
                                    name="add-outline"
                                    size={24}
                                    color={COLORS.white}
                                />
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Message"
                component={Test}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? 'notifications'
                                        : 'notifications-outline'
                                }
                                size={24}
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    color: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Test}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={
                                    focused ? icons.user : icons.userOutline
                                }
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
