import React from 'react'

import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
    </View>
    
  )
}

export default HomeScreen