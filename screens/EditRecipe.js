import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const EditRecipe = ({ navigation, route, updateUserRecipe }) => {
  const { recipe } = route.params;
  
  const [recipeName, setRecipeName] = useState(recipe.name);
  const [image, setImage] = useState(recipe.image);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join('\n'));
  const [instructions, setInstructions] = useState(recipe.instructions.join('\n'));
  const [prepTime, setPrepTime] = useState(recipe.prepTime.toString());
  const [servings, setServings] = useState(recipe.servings.toString());
  const [calories, setCalories] = useState(recipe.calories.toString());
  const [difficulty, setDifficulty] = useState(recipe.difficulty);
  const [category, setCategory] = useState(recipe.category);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!recipeName.trim() || !ingredients.trim() || !instructions.trim()) {
      Alert.alert('Missing Information', 'Please fill in all required fields (Recipe Name, Ingredients, and Instructions).');
      return;
    }

    const updatedRecipe = {
      name: recipeName.trim(),
      image: image,
      ingredients: ingredients.split('\n').filter(item => item.trim()),
      instructions: instructions.split('\n').filter(item => item.trim()),
      prepTime: parseInt(prepTime) || 30,
      servings: parseInt(servings) || 2,
      calories: parseInt(calories) || 100,
      difficulty: difficulty,
      category: category,
      cuisine: recipe.cuisine
    };

    updateUserRecipe(recipe.id, updatedRecipe);
    Alert.alert('Success', 'Recipe updated successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('MyRecipes') }
    ]);
  };

  const difficultyOptions = ['Easy', 'Medium', 'Hard'];
  const categoryOptions = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Seafood', 'Vegetarian', 'Pasta', 'Soup', 'Salad', 'Breakfast', 'Miscellaneous'];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Recipe</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Recipe Information</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Recipe Name"
              value={recipeName}
              onChangeText={setRecipeName}
            />

            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              <Image source={{ uri: image }} style={styles.selectedImage} />
              <View style={styles.imageOverlay}>
                <Ionicons name="camera" size={24} color="#FFFFFF" />
                <Text style={styles.imageOverlayText}>Tap to change image</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={styles.halfInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Prep Time (mins)"
                  value={prepTime}
                  onChangeText={setPrepTime}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.halfInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Servings"
                  value={servings}
                  onChangeText={setServings}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.halfInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Calories"
                  value={calories}
                  onChangeText={setCalories}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.halfInput}>
                <View style={styles.pickerContainer}>
                  <Text style={styles.pickerLabel}>Difficulty:</Text>
                  <View style={styles.pickerButtons}>
                    {difficultyOptions.map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={[
                          styles.pickerButton,
                          difficulty === option && styles.selectedPickerButton
                        ]}
                        onPress={() => setDifficulty(option)}
                      >
                        <Text style={[
                          styles.pickerButtonText,
                          difficulty === option && styles.selectedPickerButtonText
                        ]}>
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Category:</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryButtons}>
                  {categoryOptions.map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.categoryButton,
                        category === option && styles.selectedCategoryButton
                      ]}
                      onPress={() => setCategory(option)}
                    >
                      <Text style={[
                        styles.categoryButtonText,
                        category === option && styles.selectedCategoryButtonText
                      ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ingredients (one per line)"
              value={ingredients}
              onChangeText={setIngredients}
              multiline
              numberOfLines={4}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Instructions (one step per line)"
              value={instructions}
              onChangeText={setInstructions}
              multiline
              numberOfLines={6}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Update Recipe</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
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
  placeholder: {
    width: 60,
  },
  content: {
    flex: 1,
  },
  formCard: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#F8F9FA',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  imagePicker: {
    marginBottom: 15,
    position: 'relative',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageOverlayText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  pickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  selectedPickerButton: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  pickerButtonText: {
    fontSize: 12,
    color: '#666',
  },
  selectedPickerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  categoryButtons: {
    flexDirection: 'row',
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F9FA',
  },
  selectedCategoryButton: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  categoryButtonText: {
    fontSize: 12,
    color: '#666',
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#FF6B35',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditRecipe;
