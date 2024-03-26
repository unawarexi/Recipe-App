import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "../../assets/Image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { Categories, Recipes } from "../components/ExportComponents";

import axios from "axios";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories data when component mounts
  useEffect(() => {
    getCategories();
  }, []);

  // Function to fetch categories data
  const getCategories = async () => {
    try {
      // Fetch data from API
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );

      // Check if response data is valid and update state accordingly
      if (response && response.data && response.data.categories) {
        setCategories(response.data.categories);
      } else {
        console.log("Error: Invalid response data");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

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
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </View>
        </View>

        {/*------------------ {categories} ---------------- */}

        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>

        {/*------------------ {Recipes} ---------------- */}

        <View>
          <Recipes />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
