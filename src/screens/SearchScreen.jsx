import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, SectionList } from 'react-native';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline" 
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";

import SearchLoader from "../components/loader/SearchLoader"

import {API_FETCH_SEARCH_RESULTS } from "@env"
import Recipes from '../components/Recipes';
import CacheImage from '../helpers/CacheImage';

// SearchScreen.jsx
const SearchScreen = ({searchResults, setSearchResults}) => {
    const [searchQuery, setSearchQuery] = useState('');
   
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const fetchResultsUrl = `${API_FETCH_SEARCH_RESULTS}${searchQuery}`
        const response = await axios.get(fetchResultsUrl);
        setSearchResults(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching search results:', error.message);
      }
      setIsLoading(false);
    };
  
    const handleSearchInputChange = (text) => {
      setSearchQuery(text);
    };
  
    const handleSearchIconPress = () => {
      fetchSearchResults();
    };
  
    const navigation = useNavigation();
  
   const renderSearchItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate("RecipeDetail", {...item})} style={{ flexDirection: 'row' }}>
        <Text style={{ padding: 10, backgroundColor: 'rgba(0,0,0,0.1)', margin: 10, borderRadius: 20 }}>{item.strMeal}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, margin: 10 }}>
          <TextInput
            placeholder="Search recipe..."
            placeholderTextColor="gray"
            style={{ flex: 1, fontSize: 16 }}
            value={searchQuery}
            onChangeText={handleSearchInputChange}
          />
          <TouchableOpacity onPress={handleSearchIconPress} style={{ backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
            <MagnifyingGlassIcon size={20} strokeWidth={2} color="gray" />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <SearchLoader />
        ) : (
          <SectionList
            sections={[{ title: 'Search Results', data: searchResults }]}
            renderItem={renderSearchItem}
            keyExtractor={(item) => item.idMeal}
            style={{ fontSize: hp(1.7) }}
          
            ListEmptyComponent={<Text>No search results found</Text>}
          />
        )}
       
      </View>
    );
  };
  
  export default SearchScreen;
  