import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  import { } from "react-native-heroicons/outline";

export default function Recipes() {
  return (
    <View className= " mx-4 space-y-3">
      <Text style = {{fontSize: hp(3)}} className = "font-semibold text-neutral-600">Recipes</Text>
      <View>
        
      </View>
    </View>
  )
}