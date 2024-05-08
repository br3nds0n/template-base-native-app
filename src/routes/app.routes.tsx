import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DrawerNavigation} from '../navigations/DrawerNavigation';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Main">
            <Stack.Screen name="Main" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}
