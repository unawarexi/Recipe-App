import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants/DummyIndex";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import CacheImage from "../helpers/CacheImage";

export default function Categories({ activeCategory,  categories, selectCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((items, index) => {
          let isActive = items.strCategory === activeCategory;
          let activeButtonClass = isActive ? "bg-amber-500" : "bg-black/10";

          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
              onPress={() => {
                selectCategory(items.strCategory)
              }}
            >
              <View className={`rounded-full p-[6px]  ${activeButtonClass}`}>
                <Image
                  source={{ uri: items.strCategoryThumb }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />

                {/* <CacheImage  
                 uri = {items.strCategoryThumb }
                style={{ width: hp(6), height: hp(6) }}
                className="rounded-full"  /> */}
              </View>

              <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                {items.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
