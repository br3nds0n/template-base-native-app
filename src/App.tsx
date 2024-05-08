import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';

import {Routes} from './routes/index.routes';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaView style={{flex: 1}}>
                <Routes />
            </SafeAreaView>
        </>
    );
}
