import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyFood = ({ navigation, userRecipes }) => {
  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
    >
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>{item.name}</Text>
        <Text style={styles.recipeCategory}>{item.category} | {item.cuisine}</Text>
        <View style={styles.recipeDetails}>
          <Text style={styles.detailText}>{item.prepTime} mins</Text>
          <Text style={styles.detailText}>•</Text>
          <Text style={styles.detailText}>{item.servings} servings</Text>
          <Text style={styles.detailText}>•</Text>
          <Text style={styles.detailText}>{item.difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (userRecipes.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Food</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No recipes added yet.</Text>
          <Text style={styles.emptyDescription}>
            Another category bar option is My Food, which leads you to your personal recipe collection. This section has the option to add your recipes.
          </Text>
          
          <TouchableOpacity
            style={styles.backToHomeButton}
            onPress={() => navigation.navigate('MainFeed')}
          >
            <Text style={styles.backToHomeText}>Back to Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addRecipeButton}
            onPress={() => navigation.navigate('AddRecipe')}
          >
            <Text style={styles.addRecipeText}>Add New Recipe</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Food</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddRecipe')}
        >
          <Ionicons name="add" size={24} color="#FF6B35" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.manageRecipesButton}
          onPress={() => navigation.navigate('MyRecipes')}
        >
          <Text style={styles.manageRecipesText}>Manage My Recipes</Text>
          <Ionicons name="chevron-forward" size={20} color="#FF6B35" />
        </TouchableOpacity>

        <FlatList
          data={userRecipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.recipesList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 5,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  manageRecipesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9FA',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  manageRecipesText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  recipesList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  recipeInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recipeCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  recipeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#999',
    marginRight: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  backToHomeButton: {
    backgroundColor: '#6C757D',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  backToHomeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addRecipeButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  addRecipeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyFood;
