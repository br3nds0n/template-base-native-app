import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function AuthRoutes() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                auth
            </Text>
        </SafeAreaView>
    );
};