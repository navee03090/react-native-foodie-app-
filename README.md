# Foodie App - React Native Recipe Application

A fully functional recipe application built with React Native and Expo that allows users to discover, add, and manage their favorite recipes.

## Features

### Main Feed
- Scrollable main page showcasing recipes from all users
- Horizontal scrollable category bar with 13+ categories
- Recipe cards with images and names
- Heart icon to favorite/unfavorite recipes

### Recipe Details
- Complete recipe information including:
  - High-quality dish image
  - Recipe name and category
  - Preparation time, servings, calories, and difficulty level
  - Complete ingredients list
  - Step-by-step instructions
- Back button for navigation
- Heart icon to toggle favorites

### Favorites Section
- View all favorited recipes
- Easy access to saved recipes
- Remove recipes from favorites

### My Food Section
- Personal recipe collection
- Add new recipe functionality
- Manage personal recipes

### Add/Edit Recipe
- Upload dish images
- Input recipe name, ingredients, and instructions
- Set preparation time, servings, calories, and difficulty
- Choose recipe category
- Save and publish recipes

### My Recipes Management
- View all personal recipes
- Edit existing recipes
- Delete recipes with confirmation
- Full control over personal contributions

## Technical Requirements Met

✅ **10+ Recipe Categories**: 13 categories including My Food, My Favorites, Beef, Chicken, Dessert, Lamb, Seafood, Vegetarian, Pasta, Soup, Salad, Breakfast, and Miscellaneous

✅ **Recipe Details**: All required information displayed (ingredients, instructions, prep time, servings, calories, difficulty)

✅ **Category Filtering**: Recipes filter by selected category

✅ **Heart Icon Toggle**: Functional favorite/unfavorite with visual feedback

✅ **Favorites Section**: Displays favorited recipes correctly

✅ **My Food Option**: Includes "Add New Recipe" functionality

✅ **Add Recipe Form**: Complete form with all required fields and save button

✅ **My Recipes Display**: Shows user-added recipes with full details

✅ **Edit/Delete Buttons**: Functional edit and delete operations

✅ **Back Button**: Present on all pages for navigation

## Installation & Setup

1. **Prerequisites**
   - Node.js (v14 or higher)
   - Expo CLI (`npm install -g expo-cli`)
   - Expo Go app on your mobile device

2. **Installation**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm start
   ```

4. **View on Device**
   - Scan the QR code with Expo Go app (Android) or Camera app (iOS)
   - Or run on simulator/emulator

## Project Structure

```
Foodie App/
├── App.js                 # Main app component with navigation
├── data/
│   └── sampleData.js      # Sample recipes and categories
├── screens/
│   ├── MainFeed.js        # Main feed with categories and recipes
│   ├── RecipeDetails.js   # Individual recipe details
│   ├── Favorites.js       # Favorites section
│   ├── MyFood.js          # Personal recipe collection
│   ├── AddRecipe.js       # Add new recipe form
│   ├── MyRecipes.js       # Manage personal recipes
│   └── EditRecipe.js      # Edit existing recipes
├── assets/                # App icons and images
└── package.json           # Dependencies and scripts
```

## Sample Data

The app includes 10 sample recipes across different categories:
- Beef and Mustard Pie
- Beef and Oyster Pie
- Roasted Lamb with Rosemary
- Grilled Chicken Breast
- Chocolate Lava Cake
- Salmon Teriyaki
- Vegetarian Pasta
- Minestrone Soup
- Caesar Salad
- Pancakes

## Dependencies

- **expo**: ~49.0.0
- **react**: 18.2.0
- **react-native**: 0.72.6
- **@react-navigation/native**: ^6.1.7
- **@react-navigation/stack**: ^6.3.17
- **expo-image-picker**: ~14.3.2
- **@expo/vector-icons**: ^13.0.0

## Usage

1. **Browse Recipes**: Use the main feed to explore recipes by category
2. **View Details**: Tap any recipe to see full details
3. **Favorite Recipes**: Use the heart icon to save favorites
4. **Add Recipes**: Go to My Food → Add New Recipe
5. **Manage Recipes**: Use My Recipes to edit or delete your recipes

## Testing Checklist

- [ ] Import repository into Snack Expo
- [ ] Verify 10+ categories in horizontal scroll
- [ ] Check recipe details page has all required information
- [ ] Test category filtering functionality
- [ ] Verify heart icon toggle works
- [ ] Test favorites section displays correctly
- [ ] Check My Food section and Add New Recipe
- [ ] Verify add recipe form has all required fields
- [ ] Test My Recipes section displays added recipes
- [ ] Check edit and delete functionality
- [ ] Verify back button works on all pages

## GitHub Repository

This project is ready for submission and peer review. The repository contains all necessary files and follows React Native best practices.

## License

This project is created for educational purposes as part of a React Native course final project.
