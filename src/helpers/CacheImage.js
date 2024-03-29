import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";


const MAX_CACHE_SIZE = 1024 * 1024 * 10; // 10 MB

// uppercase
const CacheImage = ({ uri, ...props }) => {
    const [cachedUri, setCachedUri] = useState(null);

    useEffect(() => {
        const getCachedImage = async () => {
            try {
                 // Check if image URI is already cached
                const cachedImageData = await AsyncStorage.getItem(uri);

                if (cachedImageData) {
                    setCachedUri({ uri: cachedImageData });
                } else {

                    // Image is not cached, download and cache it
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise((resolve, reject) => {
                        // read content of file
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob);
                        reader.onloadend = () => {
                            resolve(reader.result);
                        };
                        reader.onerror = reject;
                    });

                    await cacheImage(uri, base64Data);
                    setCachedUri({ uri: base64Data });
                }

            } catch (error) {
                console.error("Error fetching or caching image:", error);
            }
        };

        getCachedImage();
    }, [uri]); // Re-run effect only if URI changes

    // lowercase
    const cacheImage = async (uri, data) => {
        try {
            await AsyncStorage.setItem(uri, data);

            // -------------- Check cache size
            const cacheSize = await AsyncStorage.getSize();

            if (cacheSize > MAX_CACHE_SIZE) {
                //------------------  Implement cache eviction strategy (e.g., remove oldest items)
                const allKeys = await AsyncStorage.getAllKeys();
                const oldestKey = allKeys[0]; // -------------- For simplicity, just remove the first key
                await AsyncStorage.removeItem(oldestKey);
            }
        } catch (error) {
            console.error("Error caching image:", error);
        }
    };

    return <Animated.Image source={cachedUri} {...props} />;
};

export default CacheImage;