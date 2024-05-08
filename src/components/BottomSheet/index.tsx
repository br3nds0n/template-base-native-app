import {View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../../global';

interface BottomSheet {
    bottomSheetRef: any;
    children: any;
}

export function BottomSheet({bottomSheetRef, children}: BottomSheet) {
    return (
        <RBSheet
            ref={bottomSheetRef}
            height={300}
            openDuration={250}
            draggable={true}
            closeOnPressBack={true}
            closeOnPressMask={true}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                draggableIcon: {
                    backgroundColor: COLORS.gray,
                    width: 100,
                },
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                },
            }}>
            <View>{children}</View>
        </RBSheet>
    );
}
