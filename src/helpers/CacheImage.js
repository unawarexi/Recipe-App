import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";

const CacheImage = ({ uri }) => {
  const [cachedUri, setCachedUri] = useState(null);

  useEffect(() => {
    const fetchCachedUri = async () => {
      try {
        // Check if image URI is already cached
        const cachedImageUri = await AsyncStorage.getItem(uri);
        if (cachedImageUri) {
          setCachedUri(cachedImageUri);
        } else {
          // Image is not cached, download and cache it
          const response = await fetch(uri);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const blob = await response.blob();
          const dataUrl = await readBlobAsDataURL(blob);
          setCachedUri(dataUrl);
          await AsyncStorage.setItem(uri, dataUrl);
        }
      } catch (error) {
        console.log("Error fetching or caching image:", error);
      }
    };

    fetchCachedUri();
  }, [uri]); // Re-run effect only if URI changes

  const readBlobAsDataURL = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return cachedUri ? <Animated.Image source={{ uri: cachedUri }} /> : null;
};

export default CacheImage;
