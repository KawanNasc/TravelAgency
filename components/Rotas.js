import{MaterialCommunityIcons} from "@expo/vector-icons";
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Login from './Login';
import Hotels from '../screens/Hotels';
import Passages from '../screens/Passages';
import Travel_Packages from '../screens/Travel_Packages';
 
const Tab = createBottomTabNavigator();

export default function Rotastab() {
  return(
    <Tab.Navigator tabBarOptions={{
      style:{
        backgroundColor:'#121212',
        borderTopColor: 'transparent',
        position: 'absolute',
        botton:14,
        left:74,
        right:74,
        elevation:0,
        borderRadius:16,
        height:50,
      },
      activeTintColor:'#fff',
      tabStyle:{
        paddingBottom:5,
        paddigTop:5,
      }
    }} initialRouteName="Login" screenOptions={{headerShown:false}}>

      <Tab.Screen 
      name= "Login" 
      component={Login} 
      options={{
      tabBarIcon:({color,size})=> (
      <MaterialCommunityIcons name="Login" color={color} size={size}/>)   
      }}/>

      <Tab.Screen
      name="Home"
      component={Home}
      optons={{
      tabBarIcon:({color,size})=> (
      <MaterialCommunityIcons name="Home" color={color} size={size}/>)   
      }}/>

      <Tab.Screen
      name="Travel_Packages"
      component={Travel_Packages}
      optons={{
      tabBarIcon:({color,size})=> (
        <MaterialCommunityIcons name="tickts" color={color} size={size}/>)
      }}/>

      <Tab.Screen
      name="Passages"
      component={Passages}
      optons={{
      tabBarIcon:({color,size})=> (
      <MaterialCommunityIcons name="airplane" color={color} size={size}/>)
      }}/>

     <Tab.Screen
      name="Hotels"
      component={Hotels}
      optons={{
      tabBarIcon:({color,size})=> (
      <MaterialCommunityIcons name="Hotel" color={color} size={size}/>)
      }}/>

 
    </Tab.Navigator>
  );
}
  