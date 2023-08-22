import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function tutorialScreen({navigation}){
    //navigate to About page on button click
    const pressHandler =() => {
        navigation.navigate('DetailsPage')
    }
    return(
        //text to be displayed
        <View >
            <Text >Hi! You are at Details Screen.</Text>
            <Button title='Next Page' onPress={pressHandler}/>
        </View>
    )
}