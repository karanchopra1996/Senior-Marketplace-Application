import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;

export default function PetCarePage({navigation}){
    //navigate to About page on button click
    return(
        //text to be displayed
        <View style={{flex: 1}}>
            
            <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.rover.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/rover.jpeg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27,margin:1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
                <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Rover</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Rover.com operates an online marketplace for people to buy and sell pet care services including pet sitting, dog boarding, and dog walking.</Text>
              
                </View>
            
            
              
        </View>
        <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.chewy.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/chewy.jpg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27, margin: 1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
              <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Chewy</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Chewy is an e-commerce store of pet food and other pet-related products. It strives to deliver the best quality products with the best service </Text>
                </View>
            
            
              
        </View>
        
        </View>
    )
}