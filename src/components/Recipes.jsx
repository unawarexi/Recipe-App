
import React, {useMemo} from "react";
import { Image, Text, View, Pressable,} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../constants/DummyIndex";

import Animated, { FadeInDown } from 'react-native-reanimated';
import MainLoader from "./loader/MainLoader"
import CacheImage from "../helpers/CacheImage";
import { useNavigation } from "@react-navigation/native";

export default function Recipes({ categories, meals, searchResults }) {
  const Navigation  =  useNavigation();

  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>

      {/* {--------------------- MANSORY LAYOUT !FLATLISTS ------------} */}
      <View>
      {categories.length === 0 || meals.length === 0 ? (
          <MainLoader />
        ) : (
          <>
            {searchResults && searchResults.length > 0 && (
              <MasonryList
                data={searchResults}
                keyExtractor={(item) => item.idMeal}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <RecipeCard item={item} index={index} Navigation={Navigation} />}
                onEndReachedThreshold={0.1}
              />
            )}
            <MasonryList
              data={meals}
              keyExtractor={(item) => item.idMeal}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => <RecipeCard item={item} index={index} Navigation={Navigation} />}
              onEndReachedThreshold={0.1}
            />
          </>
        )}
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index, Navigation }) => {
  let isEven = index % 2 === 0;
  const isNotEven = useMemo(() => Math.random() < 0.5, []) // making sure the images are not rendered equally
  
  return (
    <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => Navigation.navigate('RecipeDetail', {...item})}
      >
        {/* <Image
          source={{ uri: item.strMealThumb }}
          style={{ width: "100%", height: isNotEven ? hp(25) : hp(35), borderRadius: 35}} 
          className="bg-black/5"
        /> */}

       <CacheImage uri={item.strMealThumb} style={{ width: '100%', height: isNotEven ? hp(25) : hp(35), borderRadius: 35 }} />

        <Text className="font-semibold ml-2 text-neutral-600" style = {{fontSize: hp(1.5)}}>
          {item.strMeal.length > 20 ? `${item.strMeal.slice(0, 20)}...` : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
