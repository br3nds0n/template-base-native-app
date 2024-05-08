import React from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import {BottomTabNavigation} from '../BottomTabNavigation';
import {COLORS, avatar} from '../../global';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Test} from '../../screens/Test';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={props => {
                return (
                    <SafeAreaView>
                        <View
                            style={{
                                height: 200,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.white,
                            }}>
                            <Image
                                source={avatar}
                                style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 50,
                                    marginBottom: 12,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: COLORS.black,
                                    marginBottom: 6,
                                }}>
                                Brendson Victor
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: COLORS.black,
                                }}>
                                Developer
                            </Text>
                        </View>
                        <DrawerItemList {...props} />
                        <View
                            style={{
                                borderBottomColor: COLORS.gray,
                                borderBottomWidth: 1,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => console.log('sair')}
                            style={{marginLeft: 20, marginTop: 16}}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Ionicons
                                    name="log-out-outline"
                                    size={24}
                                    color={COLORS.black}
                                />
                                <Text style={{marginLeft: 24, fontSize: 16}}>
                                    Logout
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                );
            }}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: COLORS.white,
                    width: 250,
                },
                headerStyle: {
                    backgroundColor: COLORS.white,
                },
                headerShown: false,
                headerTintColor: COLORS.black,
                drawerLabelStyle: {
                    color: COLORS.black,
                    fontSize: 14,
                    marginLeft: -10,
                },
            }}>
            <Drawer.Screen
                name="Home"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    headerShadowVisible: false,
                    drawerIcon: () => (
                        <Ionicons
                            name="home-outline"
                            size={24}
                            color={COLORS.black}
                        />
                    ),
                }}
                component={BottomTabNavigation}
            />
            {/* <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: "Orders",
          title: "Orders",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: "Search",
          title: "Search",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Wishlist"
        options={{
          drawerLabel: "Wishlist",
          title: "Wishlist",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Favourite}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: "Delivery Address",
          title: "Delivery Address",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Methods"
        options={{
          drawerLabel: "Payment Methods",
          title: "Payment Methods",
          headerShadowVisible: false,
          drawerIcon: () => (
            <AntDesign name="creditcard" size={24} color={COLORS.black} />
          ),
        }}
        component={PaymentMethod}
      /> */}
            <Drawer.Screen
                name="Notifications"
                options={{
                    drawerLabel: 'Notifications',
                    title: 'Notifications',
                    headerShadowVisible: false,
                    drawerIcon: () => (
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color={COLORS.black}
                        />
                    ),
                }}
                component={Test}
            />
        </Drawer.Navigator>
    );
}
