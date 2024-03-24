import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../../assets/Image";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Animated, {
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const WelcomeScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(5));
    }, 300);
  }, []);

  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* {LOGO IMAGE WITH RINGS} */}
      <Animated.View
        className="bg-white/20 rounded-ful "
        style={{ padding: ring1padding }}
      >
        <Animated.View
          className=" bg-white/20 rounded-full "
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
