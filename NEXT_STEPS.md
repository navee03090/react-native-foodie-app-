# 🚀 Next Steps for Your Foodie App

## 1. Install Dependencies

First, install all the required packages:

```bash
npm install
```

## 2. Start the Development Server

Run the Expo development server:

```bash
npm start
```

This will:
- Start the Metro bundler
- Show a QR code in your terminal
- Open the Expo DevTools in your browser

## 3. Test on Your Device

### Option A: Using Expo Go App (Recommended)
1. **Download Expo Go** from:
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
   - [App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)

2. **Scan the QR Code**:
   - **Android**: Open Expo Go app and scan the QR code
   - **iOS**: Use your Camera app to scan the QR code

### Option B: Using Simulator/Emulator
- **iOS Simulator**: Press `i` in the terminal (requires Xcode)
- **Android Emulator**: Press `a` in the terminal (requires Android Studio)

## 4. Test All Features

Go through each requirement systematically:

### ✅ Main Feed Testing
- [ ] Verify 13 categories are displayed horizontally
- [ ] Test category scrolling
- [ ] Check recipe cards display properly
- [ ] Test heart icon toggle functionality

### ✅ Recipe Details Testing
- [ ] Tap any recipe to view details
- [ ] Verify all information is displayed:
  - [ ] Ingredients list
  - [ ] Step-by-step instructions
  - [ ] Preparation time
  - [ ] Number of servings
  - [ ] Calories
  - [ ] Difficulty level
- [ ] Test back button
- [ ] Test heart icon toggle

### ✅ Category Filtering Testing
- [ ] Tap different categories
- [ ] Verify recipes filter correctly
- [ ] Test "My Food" and "My Favorites" navigation

### ✅ Favorites Testing
- [ ] Add recipes to favorites using heart icon
- [ ] Navigate to Favorites section
- [ ] Verify favorited recipes appear
- [ ] Test removing favorites

### ✅ My Food Section Testing
- [ ] Navigate to "My Food" from categories
- [ ] Verify "Add New Recipe" option is present
- [ ] Test navigation to add recipe form

### ✅ Add Recipe Testing
- [ ] Fill out the add recipe form:
  - [ ] Recipe name
  - [ ] Image upload (optional)
  - [ ] Ingredients list
  - [ ] Step-by-step instructions
  - [ ] Preparation time, servings, calories
  - [ ] Difficulty level
  - [ ] Category selection
- [ ] Test "Save Recipe" button
- [ ] Verify recipe appears in My Food section

### ✅ My Recipes Testing
- [ ] Navigate to "Manage My Recipes"
- [ ] Verify added recipes appear
- [ ] Test "Edit" button functionality
- [ ] Test "Delete" button with confirmation
- [ ] Verify recipe details display correctly

### ✅ Navigation Testing
- [ ] Test back button on all screens
- [ ] Verify smooth navigation between screens
- [ ] Test deep linking and state preservation

## 5. Prepare for Submission

### Create GitHub Repository
1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Foodie App complete implementation"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it "foodie-app" or similar
   - Make it public for peer review
   - Push your code:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/foodie-app.git
     git push -u origin main
     ```

### Test on Snack Expo
1. **Go to [Snack Expo](https://snack.expo.dev)**
2. **Click "Import Git Repository"**
3. **Enter your GitHub repository URL**
4. **Verify the app loads correctly**
5. **Test all features in the web preview**

## 6. Peer Review Checklist

When submitting for peer review, ensure you can answer "Yes" to all these questions:

- [ ] **Question 1**: Were you able to import the submitted GitHub repository into Snack Expo using the "Import Git Repository" option? (1 pt)
- [ ] **Question 2**: On the main feed page, are there at least 10 recipe categories displayed horizontally? (5 pts)
- [ ] **Question 3**: On the main feed, when you select a recipe, are you able to see ingredients, instructions, preparation time, number of servings, calories, and difficulty level? (6 pts)
- [ ] **Question 4**: When you click a category from the main feed, does it load recipes specific to that category? (1 pt)
- [ ] **Question 5**: Is there a heart icon to favorite a recipe, and does it toggle between favoriting and unfavoriting when clicked again? (2 pts)
- [ ] **Question 6**: Add at least one recipe in the "Favorites" section and check if it's displayed correctly. (1 pt)
- [ ] **Question 7**: Is there a "My Food" option in the categories bar, and does it include the "Add New Recipe" option? (2 pts)
- [ ] **Question 8**: Does the "Add New Recipe" option allow you to input recipe name, image upload, ingredients list, step-by-step instructions, and does it have a "Save Recipe" button? (5 pts)
- [ ] **Question 9**: After adding a new recipe, is it displayed in the "My Recipes" section? (1 pt)
- [ ] **Question 10**: When you click a recipe in "My Recipes," does it display the full recipe details, including the name, image, ingredients, and instructions? (3 pts)
- [ ] **Question 11**: Does each recipe in the "My Recipes" section have "Edit" and "Delete" buttons? Are these buttons functional? (2 pts)
- [ ] **Question 12**: Does the Foodie App have a functional back button? (1 pt)

## 7. Troubleshooting

### Common Issues and Solutions:

**Issue**: App won't start
- **Solution**: Run `npm install` first, then `npm start`

**Issue**: Images not loading
- **Solution**: Check internet connection, images are loaded from Unsplash

**Issue**: Navigation not working
- **Solution**: Ensure all screen components are properly imported in App.js

**Issue**: Heart icon not toggling
- **Solution**: Check that favorites state is properly managed

**Issue**: Form validation errors
- **Solution**: Ensure all required fields are filled before saving

## 8. Final Notes

Your Foodie App is now complete with:
- ✅ All 12 requirements implemented
- ✅ Professional UI/UX design
- ✅ Complete functionality
- ✅ Error handling and validation
- ✅ Responsive design for mobile devices
- ✅ Ready for peer review

**Total Points Available**: 30 points
**Estimated Completion**: 100% ✅

Good luck with your submission! 🎉
