import React from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Dimensions,View, Image,TouchableOpacity, Text, Button } from "react-native";
const DeviceWidth = Dimensions.get('window').width;

export default function RealEstatePage({navigation}){
    //navigate to About page on button click
    const pressHandler =() => {
        navigation.navigate('DetailsPage')
    }
    return(
        //text to be displayed
        <View style={{flex: 1}}>
            
            <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.redfin.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/Redfin.jpeg")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27,margin:1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
                <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Redfin</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Redfin operates a residential real estate brokerage in 95 markets in the United States and Canada and in other markets via partner/referral agents.</Text>
              
                </View>
            
            
              
        </View>
        <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.experiencewindermere.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/expWind.png")} style={{width: DeviceWidth*0.27, height: DeviceWidth*0.27, margin: 1}}></Image>
              </TouchableOpacity>
                </View>
                <View>
              <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Experience Windermere</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Experience Windermere aims to change the real estate industry by putting relationships before sales quotas, with an emphasis on service to our clients and our community.</Text>
                </View>
            
            
              
        </View>
        <View style={{flexDirection: 'row'}}>
                <View>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.zillow.com/')} style={{width:DeviceWidth*0.28,height: DeviceWidth*0.28,margin:10,backgroundColor: 'lightgrey', borderWidth:1, borderColor: 'grey',}}
              >
                <Image source ={require("../assets/Zillow.jpeg")} style={{width: DeviceWidth*0.27, margin:1, height: DeviceWidth*0.27}}></Image>
              </TouchableOpacity>
                </View>
                <View>
              <Text style={{padding:10,width:DeviceWidth*0.65,fontSize: 20,fontFamily: 'Arial',fontWeight: 'bold',height: DeviceWidth*0.10,marginTop:10,backgroundColor: 'white'}}
              >Zillow</Text>
              <Text style={{paddingLeft:10,width:DeviceWidth*0.65,fontSize: 12,fontFamily: 'Arial',height: DeviceWidth*0.18,backgroundColor: 'white'}}
              >Zillow and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service.</Text>
              
                </View>
        </View>
        </View>
    )
}