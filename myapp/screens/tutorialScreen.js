import React, { useRef, useState, useEffect } from 'react';
import { AppState,StyleSheet,Image, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from '../styles/globalStyles';
export default function TutorialScreen({navigation}){
    //navigate to About page on button click
    const pressHandler =() => {
        navigation.navigate('MenuPage')
    }
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
  
    useEffect(() => {
      const subscription = AppState.addEventListener("change", _handleAppStateChange);
      return () => {
        subscription.remove();
      };
    }, []);
    const _handleAppStateChange = nextAppState => {
        if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App has come to the foreground!');
        }
    
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log('AppState', appState.current);
      };
    return(
        //text to be displayed
        <View >
            <Image source ={require("../assets/sm.png")} style={{alignItems: "center", width: "100%", height: "40%"}}></Image>
            <Text style={{fontSize: 20, margin: 5}}>Hi! This screen is for HW3 - State Management </Text>
            <Text style={{fontSize: 20, marginTop: 5,marginLeft:5, color: 'blue'}}>Current state is: {appStateVisible}</Text>
            
            <TextInput style={{
    borderWidth:1,
    borderColor: "#333333",
    alignSelf: "stretch",
    margin: 15,
    height: 50,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontWeight: "300",
    }} placeholder="Enter text to check if state persists*"></TextInput>
            <Text style={{fontSize: 11, marginLeft: 15}}>* Leave the App and come back to check if the textbox values are restored.</Text>
            <Text style={{fontSize: 11, margin: 15}}>** Try to see state of the App() through the App Drawer/Recent App.</Text>

            <Button title='Next Page' onPress={pressHandler}/>

        </View>
    )
}