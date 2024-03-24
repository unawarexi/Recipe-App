import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants/DummyIndex";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((items, index) => {
          let isActive = items.name === activeCategory;
          let activeButtonClass = isActive ? "bg-amber-500" : "bg-black/10";

          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
              onPress={() => setActiveCategory(items.name)}
            >
              <View className={`rounded-full p-[6px]  ${activeButtonClass}`}>
                <Image
                  source={{ uri: items.image }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>

              <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                {items.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
