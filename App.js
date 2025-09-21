import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import screens
import MainFeed from './screens/MainFeed';
import RecipeDetails from './screens/RecipeDetails';
import Favorites from './screens/Favorites';
import MyFood from './screens/MyFood';
import AddRecipe from './screens/AddRecipe';
import MyRecipes from './screens/MyRecipes';
import EditRecipe from './screens/EditRecipe';

// Sample data
import { sampleRecipes, categories } from './data/sampleData';

const Stack = createStackNavigator();

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [favorites, setFavorites] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  const toggleFavorite = (recipeId) => {
    setFavorites(prev => {
      if (prev.includes(recipeId)) {
        return prev.filter(id => id !== recipeId);
      } else {
        return [...prev, recipeId];
      }
    });
  };

  const addUserRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: Date.now().toString(),
      isUserRecipe: true
    };
    setUserRecipes(prev => [...prev, newRecipe]);
    setRecipes(prev => [...prev, newRecipe]);
  };

  const updateUserRecipe = (recipeId, updatedRecipe) => {
    setUserRecipes(prev => 
      prev.map(recipe => 
        recipe.id === recipeId ? { ...updatedRecipe, id: recipeId, isUserRecipe: true } : recipe
      )
    );
    setRecipes(prev => 
      prev.map(recipe => 
        recipe.id === recipeId ? { ...updatedRecipe, id: recipeId, isUserRecipe: true } : recipe
      )
    );
  };

  const deleteUserRecipe = (recipeId) => {
    setUserRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    setRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    setFavorites(prev => prev.filter(id => id !== recipeId));
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="MainFeed"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainFeed">
          {props => (
            <MainFeed
              {...props}
              recipes={recipes}
              categories={categories}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="RecipeDetails">
          {props => (
            <RecipeDetails
              {...props}
              recipes={recipes}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {props => (
            <Favorites
              {...props}
              recipes={recipes}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MyFood">
          {props => (
            <MyFood
              {...props}
              userRecipes={userRecipes}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddRecipe">
          {props => (
            <AddRecipe
              {...props}
              addUserRecipe={addUserRecipe}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MyRecipes">
          {props => (
            <MyRecipes
              {...props}
              userRecipes={userRecipes}
              updateUserRecipe={updateUserRecipe}
              deleteUserRecipe={deleteUserRecipe}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="EditRecipe">
          {props => (
            <EditRecipe
              {...props}
              updateUserRecipe={updateUserRecipe}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
