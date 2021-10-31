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

const Setting = () =>{
    const navigation = useNavigation()
    return(
        <View style={{flex :1}}>
            <TouchableOpacity onPress = { () => {
                navigation.goBack()
            }}>
                <Text>
                    Home Screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Setting;