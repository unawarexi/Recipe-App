# Recipe App SETUP - EXPO

## react native expo

```javascript
npx create-expo-app@latest foldername
```

#### seting up tailwindcss using NativeWind
1. Npm i nativeWind
2. Npm i --dev tailwindCss
3. Npx tailwindcss init
4. tailwiind config content

 ```javascript
 content: ["./App.{js,jsx,ts,tsx}", "./<custom paths>/**/*.{js,jsx,ts,tsx}", "./<as muc as you want>/**/*.{js,jsx,ts,tsx}"],
 ```
5. babel configuraations too

```javascript
plugins: ["nativewind/babel"],
```


## Tools and Libraries for Project

| #   | Tool/Library                       | Use                                           | Installation Command                     |
| --- | ---------------------------------- | --------------------------------------------- | ---------------------------------------- |
| 1   | React Native Navigation            | Smooth transitions across screens             | `npm install @react-navigation/native`  |
| 2   | NativeWind                         | Installation of TailWind CSS for styling      | `npm install react-native-nativewind`   |
| 3   | React Native HeroIcons             | Icons                                         | `npm install @expo/vector-icons`         |
| 4   | React Native Responsive Screen     | Responsivity across various devices           | `npm install react-native-responsive-screen` |
| 5   | React Native Mansory List          | Displaying content in a grid-like layout      | `npm install react-native-masonry-list`  |
| 6   | React Native Reanimated            | Animations and gestures                      | `npm install react-native-reanimated`    |
| 7   | React Native Async Storage         | Persistent storage                            | `npm install @react-native-async-storage/async-storage` |
| 8   | React Native YouTube Iframe        | Embedding YouTube videos                     | `npm install react-native-youtube-iframe`|
| 9   | React Native WebView               | Allowing YouTube Iframe to work              | `npm install react-native-webview`       |

## Getting Started
To get started with your Recipe App project, follow the setup instructions provided for each tool/library. Once installed, you can begin integrating them into your project and leveraging their features to enhance your application.

