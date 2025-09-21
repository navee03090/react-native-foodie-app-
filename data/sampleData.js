export const categories = [
  { id: '1', name: 'My Food', icon: '🍽️' },
  { id: '2', name: 'My Favorites', icon: '❤️' },
  { id: '3', name: 'Beef', icon: '🥩' },
  { id: '4', name: 'Chicken', icon: '🐔' },
  { id: '5', name: 'Dessert', icon: '🍰' },
  { id: '6', name: 'Lamb', icon: '🐑' },
  { id: '7', name: 'Seafood', icon: '🐟' },
  { id: '8', name: 'Vegetarian', icon: '🥬' },
  { id: '9', name: 'Pasta', icon: '🍝' },
  { id: '10', name: 'Soup', icon: '🍲' },
  { id: '11', name: 'Salad', icon: '🥗' },
  { id: '12', name: 'Breakfast', icon: '🥞' },
  { id: '13', name: 'Miscellaneous', icon: '🍽️' }
];

export const sampleRecipes = [
  {
    id: '1',
    name: 'Beef and Mustard Pie',
    category: 'Beef',
    cuisine: 'British',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    prepTime: 35,
    servings: 3,
    calories: 103,
    difficulty: 'Medium',
    ingredients: [
      '1kg Beef',
      '2 tbs Plain Flour',
      '2 tbs Rapeseed Oil',
      '1 Onion, chopped',
      '2 Carrots, diced',
      '2 tbs Mustard',
      '500ml Beef Stock',
      'Salt and Pepper to taste',
      'Puff Pastry'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F)',
      'Cut beef into bite-sized pieces and coat with flour',
      'Heat oil in a large pan and brown the beef',
      'Add onion and carrots, cook until softened',
      'Stir in mustard and beef stock',
      'Simmer for 20 minutes until sauce thickens',
      'Transfer to pie dish and cover with puff pastry',
      'Bake for 25-30 minutes until golden brown'
    ]
  },
  {
    id: '2',
    name: 'Beef and Oyster Pie',
    category: 'Beef',
    cuisine: 'British',
    image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400',
    prepTime: 45,
    servings: 4,
    calories: 125,
    difficulty: 'Hard',
    ingredients: [
      '800g Beef',
      '12 Oysters',
      '1 Onion',
      '2 tbs Flour',
      '300ml Beef Stock',
      '1 tbs Worcestershire Sauce',
      'Puff Pastry',
      'Salt and Pepper'
    ],
    instructions: [
      'Preheat oven to 180°C (350°F)',
      'Brown beef pieces in a large pan',
      'Add chopped onion and cook until soft',
      'Stir in flour and cook for 2 minutes',
      'Add stock and Worcestershire sauce',
      'Simmer for 30 minutes',
      'Add oysters and cook for 5 minutes',
      'Transfer to pie dish and cover with pastry',
      'Bake for 30 minutes until golden'
    ]
  },
  {
    id: '3',
    name: 'Roasted Lamb with Rosemary',
    category: 'Lamb',
    cuisine: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
    prepTime: 60,
    servings: 6,
    calories: 180,
    difficulty: 'Medium',
    ingredients: [
      '1.5kg Lamb Leg',
      '4 sprigs Rosemary',
      '6 cloves Garlic',
      '3 tbs Olive Oil',
      'Salt and Pepper',
      '1 Lemon'
    ],
    instructions: [
      'Preheat oven to 220°C (425°F)',
      'Make small incisions in lamb and insert garlic and rosemary',
      'Rub with olive oil, salt, and pepper',
      'Place in roasting pan with lemon halves',
      'Roast for 20 minutes, then reduce to 180°C',
      'Continue roasting for 1 hour',
      'Rest for 15 minutes before carving'
    ]
  },
  {
    id: '4',
    name: 'Grilled Chicken Breast',
    category: 'Chicken',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400',
    prepTime: 25,
    servings: 2,
    calories: 95,
    difficulty: 'Easy',
    ingredients: [
      '2 Chicken Breasts',
      '2 tbs Olive Oil',
      '1 tsp Paprika',
      '1 tsp Garlic Powder',
      'Salt and Pepper',
      'Fresh Herbs'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Season chicken with oil and spices',
      'Grill for 6-7 minutes per side',
      'Check internal temperature reaches 75°C',
      'Rest for 5 minutes before serving',
      'Garnish with fresh herbs'
    ]
  },
  {
    id: '5',
    name: 'Chocolate Lava Cake',
    category: 'Dessert',
    cuisine: 'French',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
    prepTime: 30,
    servings: 4,
    calories: 320,
    difficulty: 'Medium',
    ingredients: [
      '100g Dark Chocolate',
      '100g Butter',
      '2 Eggs',
      '50g Sugar',
      '30g Flour',
      'Pinch of Salt'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F)',
      'Melt chocolate and butter together',
      'Beat eggs and sugar until fluffy',
      'Fold in melted chocolate mixture',
      'Add flour and salt, mix gently',
      'Pour into greased ramekins',
      'Bake for 12-14 minutes',
      'Serve immediately with ice cream'
    ]
  },
  {
    id: '6',
    name: 'Salmon Teriyaki',
    category: 'Seafood',
    cuisine: 'Japanese',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    prepTime: 20,
    servings: 2,
    calories: 140,
    difficulty: 'Easy',
    ingredients: [
      '2 Salmon Fillets',
      '3 tbs Soy Sauce',
      '2 tbs Mirin',
      '1 tbs Sugar',
      '1 tbs Sake',
      '1 tsp Ginger',
      'Sesame Seeds'
    ],
    instructions: [
      'Mix soy sauce, mirin, sugar, sake, and ginger',
      'Marinate salmon for 10 minutes',
      'Heat pan over medium heat',
      'Cook salmon skin-side down for 4 minutes',
      'Flip and cook for 3 more minutes',
      'Add teriyaki sauce and cook until glazed',
      'Garnish with sesame seeds'
    ]
  },
  {
    id: '7',
    name: 'Vegetarian Pasta',
    category: 'Vegetarian',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400',
    prepTime: 25,
    servings: 3,
    calories: 110,
    difficulty: 'Easy',
    ingredients: [
      '300g Pasta',
      '2 tbs Olive Oil',
      '3 cloves Garlic',
      '1 Bell Pepper',
      '1 Zucchini',
      '200g Cherry Tomatoes',
      'Fresh Basil',
      'Parmesan Cheese'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Heat oil in a large pan',
      'Add garlic and cook for 1 minute',
      'Add vegetables and cook for 5 minutes',
      'Add tomatoes and cook until softened',
      'Toss with cooked pasta',
      'Garnish with basil and parmesan'
    ]
  },
  {
    id: '8',
    name: 'Minestrone Soup',
    category: 'Soup',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
    prepTime: 40,
    servings: 6,
    calories: 85,
    difficulty: 'Easy',
    ingredients: [
      '2 tbs Olive Oil',
      '1 Onion',
      '2 Carrots',
      '2 Celery Stalks',
      '400g Canned Tomatoes',
      '1 cup Pasta',
      '1 can White Beans',
      'Vegetable Stock',
      'Fresh Herbs'
    ],
    instructions: [
      'Heat oil in a large pot',
      'Add chopped vegetables and cook for 5 minutes',
      'Add tomatoes and stock, bring to boil',
      'Simmer for 20 minutes',
      'Add pasta and beans',
      'Cook for 10 more minutes',
      'Season with herbs and serve'
    ]
  },
  {
    id: '9',
    name: 'Caesar Salad',
    category: 'Salad',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    prepTime: 15,
    servings: 2,
    calories: 75,
    difficulty: 'Easy',
    ingredients: [
      '1 Romaine Lettuce',
      '1/2 cup Croutons',
      '2 tbs Parmesan Cheese',
      '2 tbs Caesar Dressing',
      '1 clove Garlic',
      '1 tbs Lemon Juice',
      'Anchovies (optional)'
    ],
    instructions: [
      'Wash and chop lettuce into bite-sized pieces',
      'Make garlic croutons by toasting bread with garlic',
      'Mix lettuce with dressing',
      'Add croutons and parmesan',
      'Drizzle with lemon juice',
      'Garnish with anchovies if desired'
    ]
  },
  {
    id: '10',
    name: 'Pancakes',
    category: 'Breakfast',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    prepTime: 20,
    servings: 4,
    calories: 95,
    difficulty: 'Easy',
    ingredients: [
      '1 cup Flour',
      '2 tbs Sugar',
      '2 tsp Baking Powder',
      '1/2 tsp Salt',
      '1 cup Milk',
      '1 Egg',
      '2 tbs Butter',
      'Maple Syrup'
    ],
    instructions: [
      'Mix dry ingredients in a bowl',
      'Whisk wet ingredients in another bowl',
      'Combine wet and dry ingredients',
      'Heat griddle over medium heat',
      'Pour batter onto griddle',
      'Cook until bubbles form on surface',
      'Flip and cook until golden brown',
      'Serve with maple syrup'
    ]
  }
];
