import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../Home';
import {CreatePost} from '../CreatePost';


const Stack = createNativeStackNavigator();

export function HomeNavigationScreen() {

  const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{headerShown: false, statusBarStyle:"dark"}} >
      
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CreatePost' component={CreatePost}/>
      </Stack.Navigator> 
       
    )
  }
