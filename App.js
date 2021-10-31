import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import Setting from './src/screens/Setting';
import NewScreen from './src/screens/NewScreen';

const App = () => {
  const Stack = createStackNavigator();

  // 6th lacture
  // const [name, setNmane] = useState('Bilal')
  // const [seccion, setSeccion] = useState({ number: 6, title: 'old state' })
  // const [current, setCurrent] = useState(true)
  // 7th
  const [name, setNmane] = useState('Style Test')



  const onClickHandler = () => {
    setNmane('Styke Test is Done! ')

  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName ={"Home"}>
        <Stack.Screen name="Home" component={Home} options={{ animationEnabled: false, headerShown: false }}/>
        <Stack.Screen name="Setting" component={Setting} options={{ animationEnabled: false, headerShown: false }} />
        <Stack.Screen name="NewScreen" component={NewScreen} options={{ animationEnabled: false, headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>


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

export default App;
