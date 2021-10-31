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
import { useNavigation } from "@react-navigation/native";



const NewScreen = () => {
    const Navigation = useNavigation()
    return (

        <View style={{ flex: 1 }}>
            <Text>
                hall
            </Text>
            <View >
                <TouchableOpacity onPress={() => {
                    Navigation.goBack()
                }}>
                    <Text>
                        Home Screen
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default NewScreen;