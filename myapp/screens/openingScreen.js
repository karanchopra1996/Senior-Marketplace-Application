import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function OpeningScreen({navigation}){
    //navigate to About page on button click
    const pressHandler =() => {
        navigation.navigate('TutorialScreen')
    }
    return(
        //text to be displayed
        <View >
            <Text >Hi! You are at Page 1.</Text>
            <Button title='Next Page' onPress={pressHandler}/>
        </View>
    )
}