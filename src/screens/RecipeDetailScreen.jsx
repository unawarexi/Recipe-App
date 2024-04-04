// main components from react
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';

// for responsivivity
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

//image caching from helpers
import CacheImage from '../helpers/CacheImage';

// heroicons
import {ChevronLeftIcon, ClockIcon, FireIcon, ServerIcon} from "react-native-heroicons/outline"
import {HeartIcon, Square3Stack3DIcon, UsersIcon} from "react-native-heroicons/solid"

//navigation
import { useNavigation } from '@react-navigation/native';

//axios Api
import axios from 'axios';

import SubLoader from '../components/loader/SubLoader';
import YouTubePlayer from 'react-native-youtube-iframe';


 

const RecipeDetailScreen = (props) => {
    let itemDetails = props.route.params;
    const [isFavorite, setisFavorite] = useState(false);
    const Navigation = useNavigation();
    const [meals, setMeals] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        getRecipeDetails(itemDetails.idMeal);
      }, []);


     // Function to fetch recipes data
  const getRecipeDetails = async (id) => {
    try {
      // Fetch data from API
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
     
      // Check if response data is valid and update state accordingly
      if (response && response.data && response.data.meals) {
        setMeals(response.data.meals[0]);
        setLoading(false)
      } else {
        console.log("Error: Invalid response data");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  

  const IngredientsIndexes = (meals) => {
    
    if (!meals) return []
     
        let indexes = [];
        for (let index = 0; index <= 20; index++) {
            if (meals["strIngredient" + index]){
                indexes.push(index)
            }
            
        }
    return indexes;
  }
  
  function getYouTubeVideoId(url) {
    const regex =  /(?:youtu\.be\/|youtube\.com\/(?:.*[\&|\?](?:v=|embed\/)))([^\"^\?^\&^\#]{11})/
    const match = url.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return null;
  }
   
  return (
    <ScrollView className= "bg-white flex-1"
    showsVerticalScrollIndicator = {false}
    contentContainerStyle = {{paddingBottom: 30}}>
     <StatusBar style = {"light"} />

     {/*--------------- {RECIPE IMAGE} --------------- */}
     <View className = " flex-row justify-center">
        <CacheImage 
        uri = {itemDetails.strMealThumb}
        style = {{width : wp(98), height: hp(50), borderRadius: 40, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop : 4}} />

     </View>
    
    
    
     <View className = "w-full absolute flex-row justify-between items-center pt-14">
        {/*--------------- {BACK BUTTON} --------------- */}
        <TouchableOpacity className = "p-2 rounded-full bg-white ml-5" onPress={() => Navigation.goBack()}>
            <ChevronLeftIcon size = {hp(3.5)} strokeWidth={4.5} color= "#fbbf24" />
        </TouchableOpacity>

         {/*--------------- {FAVOURITE ICON} --------------- */}
        <TouchableOpacity className = "p-2 rounded-full bg-white mr-5" onPress={() => setisFavorite(!isFavorite)} >
          <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavorite ? "gray" : "red"} />
        </TouchableOpacity>
     </View>


    {/*--------------- {MEAL DETAILS DESCRIPTION} --------------- */}
    <View>
        {Loading  ? (
          <SubLoader className = " mt-24" />

        ) : (
            <View className = "px-4 flex justify-between space-y-4 pt-8">
                {/*--------------- {NAME AND AREA} --------------- */}

                <View className = "space-y-2">
                    <Text style = {{fontSize: hp(3)}} className='font-bold flex-1 text-neutral-700'> 
                        {meals?.strMeal}
                    </Text>
                    <Text style = {{fontSize: hp(2)}} className='font-bold flex-1 text-neutral-500'> 
                        {meals?.strArea}
                    </Text>

                     {/*--------------- {MISC} --------------- */}
                     <View className = "flex-row justify-around">

                         {/* -------------- {TIMING ICON }-------------- */}
                        <View className = "flex rounded-full bg-amber-300 p-2">
                            <View style = {{height: hp(6.5), width: hp(6.5)}} className = "bg-white rounded-full flex items-center justify-center">
                                <ClockIcon size = {hp(4)} strokeWidth={2.5} color="#525252"/>
                            </View>

                           <View className = "flex items-center justify-center py-2 space-y-1">
                            <Text style = {{fontSize: hp(2)}} className = " font-bold text-neutral-700">
                               35
                            </Text>
                            <Text style = {{fontSize: hp(1.5)}} className = " font-bold text-neutral-700">
                               Mins
                           </Text>
                           </View>
                       </View>

                       {/* -------------- {USER ICON }-------------- */}
                        <View className = "flex rounded-full bg-amber-300 p-2">
                            <View style = {{height: hp(6.5), width: hp(6.5)}} className = "bg-white rounded-full flex items-center justify-center">
                                <UsersIcon size = {hp(4)} strokeWidth={2.5} color="#525252"/>
                            </View>

                           <View className = "flex items-center justify-center py-2 space-y-1">
                            <Text style = {{fontSize: hp(2)}} className = " font-bold text-neutral-700">
                               05
                            </Text>
                            <Text style = {{fontSize: hp(1.5)}} className = " font-bold text-neutral-700">
                              Servings
                           </Text>
                           </View>
                       </View>

                       {/* -------------- {CALORIE ICON }-------------- */}
                        <View className = "flex rounded-full bg-amber-300 p-2">
                            <View style = {{height: hp(6.5), width: hp(6.5)}} className = "bg-white rounded-full flex items-center justify-center">
                                <FireIcon size = {hp(4)} strokeWidth={2.5} color="#525252"/>
                            </View>

                           <View className = "flex items-center justify-center py-2 space-y-1">
                            <Text style = {{fontSize: hp(2)}} className = " font-bold text-neutral-700">
                               138
                            </Text>
                            <Text style = {{fontSize: hp(1.5)}} className = " font-bold text-neutral-700">
                              Cals
                           </Text>
                           </View>
                       </View>

                       {/* -------------- {COOKING LEVEL ICON }-------------- */}
                        <View className = "flex rounded-full bg-amber-300 p-2">
                            <View style = {{height: hp(6.5), width: hp(6.5)}} className = "bg-white rounded-full flex items-center justify-center">
                                <Square3Stack3DIcon size = {hp(4)} strokeWidth={2.5} color="#525252"/>
                            </View>

                           <View className = "flex items-center justify-center py-2 space-y-1">
                            <Text style = {{fontSize: hp(2)}} className = " font-bold text-neutral-700">
                              9Steps
                            </Text>
                            <Text style = {{fontSize: hp(1.5)}} className = " font-bold text-neutral-700">
                              Normal
                           </Text>
                           </View>
                       </View>
                   </View>
               </View>


                 {/* -------------- { INGREDIENTS }-------------- */}
                 <View className = "space-y-4">
                    <Text style = {{fontSize: hp(2)}} className = "font-bold flex-1 text-neutral-700">
                        Ingredients

                    </Text>

                    <View className = "space-y-2 ml-3">
                        {
                            IngredientsIndexes(meals).map(index => {
                                return (
                            <View key = {index} className = "flex-row space-x-4">
                                <View style = {{height: hp(2), width: hp(2)}} className = "bg-amber-300 rounded-full" />
                                    <View className = "flex-row space-x-2">
                                        <Text style = {{fontSize: hp(2)}} className = "font-extrabold text-neutral-700 text-base">
                                            {meals["strMeasure" + index]}
                                        </Text>
                                        <Text style = {{fontSize: hp(2)}} className = "font-medium text-neutral-600 text-base">
                                            {meals["strIngredient" + index]}
                                        </Text>
                                    </View>
                                </View>
                                )
                            })
                        }
                    </View>
                 </View>

                 {/* -------------- { INSTRUCTIONS }-------------- */}
                 <View className = "space-y-4">
                    <Text style = {{fontSize: hp(2)}} className = "font-bold flex-1 text-neutral-700">
                        Cooking Steps :

                    </Text>

                <Text style = {{fontSize: hp(1.7)}} className = "text-neutral-700 leading-7 p-2 bg-black/5 rounded-md">
                    {meals?.strInstructions}
                </Text>
               </View>

                 {/* -------------- { INSTRUCTIONS YOUTUBE Video }-------------- */}
                {meals.strYoutube && (
                    <View className = "space-y-4">
                        <Text style = {{fontSize: hp(2)}} className = "font-bold flex-1 text-neutral-700">Tutorial Video</Text>

                       <View >
                        <YouTubePlayer
                          videoId= {getYouTubeVideoId(meals?.strYoutube)}
                          height={hp(30)}
                          title="YouTube video player"
                        />
                      </View>
                   </View>

                 
                )}

                {/* {stop} */}
           </View>

        )}

    </View>

    </ScrollView>
  )
}

export default RecipeDetailScreen