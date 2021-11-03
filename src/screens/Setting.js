import React from "react";
import {
    Button,
    StyleSheet,
    Linking,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text>
                    hallo
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius:100,
                borderWidth:10,
                backgroundColor: "red"
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Text>
                        Home Screen
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Setting;