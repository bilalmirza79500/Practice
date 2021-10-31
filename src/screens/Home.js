import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Linking,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
    return (

        <View style={styles.body}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.View1}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
                <View style={styles.View4}>
                    <Text style={styles.text}>4</Text>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.text}>5</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', }}>
                <View style={styles.View6}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.View7}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: "gray" }}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("Setting")
                }}>
                    <Text>
                        Setting Screen
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                    navigation.navigate("NewScreen")
                }}>
                    <Text>
                        New Screen
                    </Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'wheat',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
        //   // textTransform: 'uppercase',
    },
    View1: {
        flex: 1,
        // width:100,
        // height:100,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View2: {
        flex: 2,
        // width:100,
        // height:100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View3: {
        flex: 3,
        // width:100,
        // height: 50,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View4: {
        // flex: 1,
        // width:100,
        // height:100,
        // flexDirection: 'column',
        backgroundColor: '#ff00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View5: {
        // flex: 1,
        // width:100,
        // height:100,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View6: {
        flex: 1,
        // width:100,
        // height:100,
        // flexDirection:'row',
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View7: {
        flex: 1,
        // width:1000,
        // height:100,
        // flexDirection:'row',
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Home;
