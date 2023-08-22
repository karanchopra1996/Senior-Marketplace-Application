import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;

export default function MaintainencePage({navigation}){
    //navigate to About page on button click
    return(
        //text to be displayed
        <View style={{flex: 1}}>
            
            <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.amazon.com/b?ie=UTF8&node=8098158011')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/ahs.jpg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27,margin:1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
                <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Amazon Home Services</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Amazon Home Services is a simple way to buy and schedule services such as furniture assembly, home theater setup, and more professional services directly. </Text>
              
                </View>
            
            
              
        </View>
        <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://porch.com/home-projects')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/porch.jpg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27, margin: 1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
              <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Porch</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Porch is a website that connects homeowners with local home improvement contractors. The site features advice articles, cost guides and online booking for over 160 common home improvement, maintenance, and repair projects. </Text>
                </View>
            
            
              
        </View>
        
        </View>
    )
}