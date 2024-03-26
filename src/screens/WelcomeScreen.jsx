import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../../assets/Image";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(5.5));
    }, 300);

    setTimeout(() => {
      Navigation.navigate("Home");
    }, 2500);
  }, []);

  const Navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* {LOGO IMAGE WITH RINGS} */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring1padding }}
      >
        <Animated.View
          className=" bg-white/20 rounded-full"
          style={{ padding: ring2padding }}
        >
          <Image source={Logo} style={{ width: hp(20), height: hp(20) }} />
        </Animated.View>
      </Animated.View>

      {/* {title and punchline} */}
      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(7) }}
          className=" font-bold text-white tracking-widest "
        >
          Foodie!
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" font-medium text-white tracking-widest text-lg"
        >
          A healthy being is a wealthy one
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
