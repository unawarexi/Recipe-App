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



## React-Native errors 

| Error Type                        | Meaning                                                                                               | Resolution                                                                                                                                                           |
|-----------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SyntaxError                       | Occurs when there's a syntax error in your code.                                                      | Check your code for typos, missing or misplaced punctuation, unclosed brackets, or other syntax errors.                                                              |
| ReferenceError                    | Occurs when trying to access a variable that is not defined.                                           | Check the spelling of the variable name and ensure it is declared or imported properly.                                                                             |
| TypeError                         | Occurs when a value is not of the expected type or when an operation is performed on an invalid type. | Check the types of values being used and ensure they match the expected types.                                                                                        |
| Undefined is not an object       | Typically occurs when trying to access properties or methods of an undefined object.                   | Ensure that the object is initialized properly before accessing its properties or methods.                                                                          |
| Component is not defined         | Indicates that the specified component is not imported or defined.                                     | Check the import statement for the component and verify that the component is correctly defined and exported.                                                        |
| NetworkError                     | Occurs when there's an issue with network requests, such as a failed HTTP request.                     | Check network connectivity, ensure the server is running, and verify the correctness of the request URL and parameters.                                            |
| AsyncStorage Error              | Error related to AsyncStorage, typically due to storage limits or incorrect usage.                     | Check AsyncStorage usage, ensure proper error handling, and consider alternative storage solutions or clearing storage if necessary.                                 |
| Invalid prop 'x' of type 'y'   | Indicates that a component received an invalid prop of a different type than expected.                | Check the props passed to the component and ensure they match the expected types specified by PropTypes or TypeScript typings.                                       |
| Unable to resolve module 'x'   | Occurs when React Native cannot find a module during import.                                         | Ensure that the module is installed correctly via npm or yarn, check the import statement for correctness, and verify the module path.                               |
| Unexpected token 'x'           | Occurs when an unexpected token is encountered in the code, such as a missing or extra character.    | Check the code around the token mentioned in the error message, fix any syntax issues, and ensure that all code follows JavaScript syntax rules.                  |
