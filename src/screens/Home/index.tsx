import React, {useRef} from 'react';

import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../global';
import {Header} from '../../components/Header';
import {BottomSheet} from '../../components/BottomSheet';

const Home = () => {
    const refRBSheet = useRef();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{flex: 1, backgroundColor: COLORS.white}}>
                <Header
                    title="Home"
                    onPress={() => refRBSheet.current?.open()}
                />
            </View>
            <BottomSheet bottomSheetRef={refRBSheet} children={null} />
        </SafeAreaView>
    );
};

export default Home;
