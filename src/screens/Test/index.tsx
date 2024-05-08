import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {COLORS} from '../../global';

export function Test() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>default</Text>
        </SafeAreaView>
    );
}
