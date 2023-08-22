import React from "react";
import {Dimensions, StyleSheet,Image, View, Text, Button,TouchableOpacity } from "react-native";


const DeviceWidth = Dimensions.get('window').width

export default function tutorialScreen({navigation}){
    //navigate to About page on button click
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
          }}>
            <View style={{
              flexDirection: 'row',
              backgroundColor: "lightgrey",
              padding: 10}}>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('RealEstate')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54,marginBottom:10, marginRight: 10,backgroundColor: 'white'}}
              >
                <Image source ={require("../assets/RealEstate.png")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
            <Text style={{fontSize: 24,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Real Estate
            </Text>
      </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Transport')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54, marginBottom:10, backgroundColor: 'white'}}>
                <Image source ={require("../assets/vector-mobility.jpg")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
       <Text style={{fontSize: 20,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Transportation
            </Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Care')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54, marginBottom:10, backgroundColor: 'white'}} >
                <Image source ={require("../assets/care.jpg")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
       <Text style={{fontSize: 24,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Finding Care
            </Text>
                </TouchableOpacity>
                
              </View>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('Finance')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54, marginBottom:10,backgroundColor: 'white'}}>
              <Image source ={require("../assets/finance.png")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
       <Text style={{fontSize: 24,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Finance
            </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PetCare')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54, marginBottom:10, backgroundColor: 'white'}} >
              <Image source ={require("../assets/petcare.jpg")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
       <Text style={{fontSize: 24,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Pet Care
            </Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Maintainence')} style={{width: DeviceWidth*0.45, height: DeviceWidth*0.54, marginBottom:10, backgroundColor: 'white'}} >
                <Image source ={require("../assets/homeM.jpeg")}
      style={{width: DeviceWidth*0.45, height: DeviceWidth*0.45}}/>
       <Text style={{fontSize: 20,alignSelf:"center", textAlign: "center", fontFamily: "Menlo-Bold"}}>
                Maintainence
            </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
    );
}