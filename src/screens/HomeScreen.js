import React, {useState} from "react";
import { Image, Text, View, ScrollView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "../../assets/Image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("")

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className=" space-y-6 py-14"
      >
        {/*------------- {AVATAR AND BELL ICON} ------------ */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image source={Avatar} style={{ height: hp(5), width: hp(5.5) }} />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/*--------------- {GREETINGS AND PUNCHLINE}------------- */}
        <View className="mx-4 space-y-2 mb-2 ">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello User!
          </Text>
          <View>
            <Text
              className="font-semibold text-neutral-600"
              style={{ fontSize: hp(3.8) }}
            >
              Choose your magical recipe!!!
            </Text>
          </View>

          <Text
            className="font-semibold text-neutral-600"
            style={{ fontSize: hp(3.8) }}
          >
            {" "}
            we'll make
            <Text className="text-amber-500"> fantasies</Text>
          </Text>
        </View>

        {/* ------------ {search bar} ------------- */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="search recipe..."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />

          <View className="bg-white rounded-full p-3">
           <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
          </View>
        </View>

        {/*------------------ {categories} ---------------- */}

        <View>
        <Categories activeCategory = {activeCategory} setActiveCategory={setActiveCategory} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
