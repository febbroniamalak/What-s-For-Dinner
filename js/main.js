
const meals = [
  {
    rate: 4.6,
    reviews: 421,
    mealName: "Classic Beef Burger",
    prepTime: "15 min",
    cookTime: "20 min",
    serving: "4 people",
    difficulty: "Easy",
    type: "American",
    desc: "Juicy homemade burger with all the fixings",
    image: "Images/photo-1568901346375-23c9450c58cd.jpeg",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions and form patties.",
      "Season patties generously with salt and pepper.",
      "Cook patties on high heat 4-5 min per side.",
      "Add cheese in the last minute of cooking.",
      "Toast burger buns lightly.",
      "Assemble burgers with all ingredients.",
    ],
    nutrition: [
      { name: "Calories", value: "650 kcal" },
      { name: "Protein", value: "38g" },
      { name: "Carbohydrates", value: "42g" },
      { name: "Fat", value: "35g" },
      { name: "Fiber", value: "2g" },
      { name: "Sodium", value: "920mg" },
    ],
    tips: [
      "Don't press down on burgers while cooking",
      "Make indent in center to prevent puffing",
      "Let patties rest before serving",
      "Toast buns for better flavor",
    ],
  },
  {
    rate: 4.4,
    reviews: 312,
    mealName: "Grilled Chicken Sandwich",
    prepTime: "50 min",
    cookTime: "15 min",
    serving: "2 people",
    difficulty: "Easy",
    type: "American",
    desc: "Healthy grilled chicken with fresh veggies",
    image: "Images/photo-1509722747041-616f39b57569.jpeg",
    ingredients: [
      "2 chicken breasts",
      "2 sandwich buns",
      "Lettuce leaves",
      "Tomato slices",
      "Cheese slices",
      "Mayonnaise",
    ],
    instructions: [
      "Marinate chicken breasts for 30 min.",
      "Grill chicken on medium heat until cooked.",
      "Toast sandwich buns.",
      "Assemble sandwiches with chicken, lettuce, tomato, and cheese.",
    ],
    nutrition: [
      { name: "Calories", value: "420 kcal" },
      { name: "Protein", value: "32g" },
      { name: "Carbohydrates", value: "30g" },
      { name: "Fat", value: "15g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "680mg" },
    ],
    tips: [
      "Use skinless chicken for lower fat",
      "Let chicken rest 5 min before slicing",
      "Add whole wheat buns for extra fiber",
      "Add fresh herbs for flavor",
    ],
  },
  {
    rate: 4.7,
    reviews: 210,
    mealName: "Spaghetti Carbonara",
    prepTime: "10 min",
    cookTime: "20 min",
    serving: "3 people",
    difficulty: "Medium",
    type: "Italian",
    desc: "Creamy pasta with bacon and parmesan cheese",
    image: "Images/photo-1585032226651-759b368d7246.jpeg",
    ingredients: [
      "200g spaghetti",
      "100g bacon",
      "2 eggs",
      "50g parmesan cheese",
      "Salt and pepper",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Fry bacon until crispy.",
      "Beat eggs and mix with parmesan.",
      "Combine pasta with bacon and egg mixture.",
      "Season with salt and pepper.",
    ],
    nutrition: [
      { name: "Calories", value: "550 kcal" },
      { name: "Protein", value: "25g" },
      { name: "Carbohydrates", value: "60g" },
      { name: "Fat", value: "20g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "700mg" },
    ],
    tips: [
      "Work quickly when mixing eggs to avoid scrambling",
      "Use freshly grated parmesan",
      "Reserve pasta water to adjust sauce consistency",
      "Serve immediately for best taste",
    ],
  },
  {
    rate: 4.5,
    reviews: 180,
    mealName: "Caesar Salad",
    prepTime: "15 min",
    cookTime: "0 min",
    serving: "2 people",
    difficulty: "Easy",
    type: "Italian",
    desc: "Fresh salad with romaine, croutons, and Caesar dressing",
    image: "Images/photo-1546069901-ba9599a7e63c.jpeg",
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
    ],
    instructions: [
      "Chop lettuce and place in bowl.",
      "Add croutons and parmesan.",
      "Pour Caesar dressing and toss.",
    ],
    nutrition: [
      { name: "Calories", value: "250 kcal" },
      { name: "Protein", value: "10g" },
      { name: "Carbohydrates", value: "20g" },
      { name: "Fat", value: "15g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "500mg" },
    ],
    tips: [
      "Use fresh lettuce for crunch",
      "Add grilled chicken for extra protein",
      "Make croutons at home for best flavor",
      "Toss salad just before serving",
    ],
  },
  {
    rate: 4.8,
    reviews: 205,
    mealName: "Margherita Pizza",
    prepTime: "20 min",
    cookTime: "15 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Italian",
    desc: "Classic pizza with tomato, mozzarella, and basil",
    image: "Images/photo-1574071318508-1cdbab80d002.jpeg",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil leaves",
    ],
    instructions: [
      "Preheat oven to 220°C.",
      "Spread tomato sauce over dough.",
      "Add mozzarella and basil.",
      "Bake for 12-15 minutes until golden.",
    ],
    nutrition: [
      { name: "Calories", value: "400 kcal" },
      { name: "Protein", value: "18g" },
      { name: "Carbohydrates", value: "50g" },
      { name: "Fat", value: "15g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "600mg" },
    ],
    tips: [
      "Use fresh mozzarella for better taste",
      "Preheat oven properly",
      "Add toppings just before baking",
      "Serve hot",
    ],
  },
  {
    rate: 4.8,
    reviews: 180,
    mealName: "Garlic Butter Shrimp",
    prepTime: "10 min",
    cookTime: "10 min",
    serving: "2 people",
    difficulty: "Easy",
    type: "Seafood",
    desc: "Juicy shrimp cooked in a rich garlic butter sauce",
    image: "Images/photo-1633504581786-316c8002b1b9.jpeg",
    ingredients: [
      "300g shrimp, peeled",
      "3 tbsp butter",
      "3 cloves garlic, minced",
      "1 tsp paprika",
      "Salt and pepper",
      "Parsley for garnish",
    ],
    instructions: [
      "Melt butter in a pan and sauté garlic 1 min.",
      "Add shrimp and cook 2-3 min per side.",
      "Season with salt, pepper, and paprika.",
      "Garnish with parsley and serve hot.",
    ],
    nutrition: [
      { name: "Calories", value: "350 kcal" },
      { name: "Protein", value: "30g" },
      { name: "Carbohydrates", value: "2g" },
      { name: "Fat", value: "25g" },
      { name: "Fiber", value: "0g" },
      { name: "Sodium", value: "600mg" },
    ],
    tips: [
      "Do not overcook shrimp to keep them juicy",
      "Use fresh parsley for garnish",
      "Serve immediately",
      "Add a squeeze of lemon for extra flavor",
    ],
  },
  {
    rate: 4.8,
    reviews: 175,
    mealName: "Teriyaki Salmon",
    prepTime: "10 min",
    cookTime: "15 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Japanese",
    desc: "Salmon fillets glazed with homemade teriyaki sauce",
    image: "Images/photo-1467003909585-2f8a72700288 (1).jpeg",
    ingredients: [
      "2 salmon fillets",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "1 tsp ginger, grated",
      "1 tsp garlic, minced",
    ],
    instructions: [
      "Mix soy sauce, honey, ginger and garlic for sauce.",
      "Marinate salmon 10 min.",
      "Cook salmon on medium heat 5-7 min per side.",
      "Brush with sauce while cooking.",
    ],
    nutrition: [
      { name: "Calories", value: "400 kcal" },
      { name: "Protein", value: "30g" },
      { name: "Carbohydrates", value: "10g" },
      { name: "Fat", value: "25g" },
      { name: "Fiber", value: "1g" },
      { name: "Sodium", value: "700mg" },
    ],
    tips: [
      "Don’t overcook the salmon",
      "Use fresh fillets for best taste",
      "Serve with steamed vegetables",
      "Glaze several times for richer flavor",
    ],
  },
  {
    rate: 4.4,
    reviews: 160,
    mealName: "Greek Salad",
    prepTime: "45 min",
    cookTime: "0 min",
    serving: "2 people",
    difficulty: "Easy",
    type: "Greek",
    desc: "Fresh salad with cucumber, tomato, olives and feta cheese",
    image: "Images/photo-1546069901-eacef0df6022.jpeg",
    ingredients: [
      "1 cucumber, chopped",
      "2 tomatoes, chopped",
      "1/2 red onion, sliced",
      "Olives",
      "Feta cheese",
      "Olive oil, lemon juice",
    ],
    instructions: [
      "Combine vegetables in a bowl.",
      "Add olives and feta cheese.",
      "Drizzle with olive oil and lemon juice.",
      "Toss gently and serve.",
    ],
    nutrition: [
      { name: "Calories", value: "220 kcal" },
      { name: "Protein", value: "8g" },
      { name: "Carbohydrates", value: "15g" },
      { name: "Fat", value: "15g" },
      { name: "Fiber", value: "4g" },
      { name: "Sodium", value: "500mg" },
    ],
    tips: [
      "Use fresh, ripe vegetables",
      "Add oregano for authentic flavor",
      "Serve chilled",
      "Don’t overmix to keep feta intact",
    ],
  },
  {
    rate: 4.3,
    reviews: 130,
    mealName: "Beef Stir Fry",
    prepTime: "10 min",
    cookTime: "15 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Asian",
    desc: "Quick stir fry with beef, veggies and soy sauce",
    image: "Images/photo-1529692236671-f1f6cf9683ba.jpeg",
    ingredients: [
      "200g beef strips",
      "1 bell pepper",
      "1 onion",
      "2 tbsp soy sauce",
      "1 tsp garlic, minced",
    ],
    instructions: [
      "Heat oil in a pan.",
      "Add beef and cook 5 min.",
      "Add vegetables and soy sauce, stir fry 5 min.",
      "Serve hot with rice or noodles.",
    ],
    nutrition: [
      { name: "Calories", value: "350 kcal" },
      { name: "Protein", value: "25g" },
      { name: "Carbohydrates", value: "20g" },
      { name: "Fat", value: "15g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "650mg" },
    ],
    tips: [
      "Cut beef thinly for quick cooking",
      "Keep vegetables slightly crisp",
      "Add sesame oil for aroma",
      "Serve immediately",
    ],
  },
  {
    rate: 4.5,
    reviews: 160,
    mealName: "Lentil Soup",
    prepTime: "10 min",
    cookTime: "30 min",
    serving: "3 people",
    difficulty: "Easy",
    type: "Middle Eastern",
    desc: "Warm and hearty soup with lentils and spices",
    image: "Images/photo-1455619452474-d2be8b1e70cd.jpeg",
    ingredients: [
      "1 cup red lentils",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 cloves garlic, minced",
      "1 tsp cumin",
      "4 cups vegetable broth",
    ],
    instructions: [
      "Sauté onion, carrots, and garlic.",
      "Add lentils, broth, and spices.",
      "Simmer 20 min until lentils soft.",
      "Blend if desired and serve hot.",
    ],
    nutrition: [
      { name: "Calories", value: "280 kcal" },
      { name: "Protein", value: "15g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "5g" },
      { name: "Fiber", value: "12g" },
      { name: "Sodium", value: "600mg" },
    ],
    tips: [
      "Add lemon juice before serving for brightness",
      "Top with fresh herbs",
      "Serve with bread or pita",
      "Do not overcook lentils",
    ],
  },
  {
    rate: 4.6,
    reviews: 180,
    mealName: "Stuffed Bell Peppers",
    prepTime: "15 min",
    cookTime: "30 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Mediterranean",
    desc: "Bell peppers stuffed with rice, vegetables and cheese",
    image: "Images/photo-1612874742237-6526221588e3.jpeg",
    ingredients: [
      "2 bell peppers",
      "1 cup cooked rice",
      "Chopped veggies",
      "1/2 cup shredded cheese",
      "Salt and pepper",
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Cut tops off peppers and remove seeds.",
      "Mix rice with veggies and cheese.",
      "Stuff peppers and bake 25-30 min.",
    ],
    nutrition: [
      { name: "Calories", value: "350 kcal" },
      { name: "Protein", value: "12g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "12g" },
      { name: "Fiber", value: "5g" },
      { name: "Sodium", value: "400mg" },
    ],
    tips: [
      "Parboil peppers for softer texture",
      "Use a variety of colors for presentation",
      "Add herbs like oregano for flavor",
      "Serve hot",
    ],
  },
  {
    rate: 4.7,
    reviews: 160,
    mealName: "Shrimp Pasta",
    prepTime: "60 min",
    cookTime: "20 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Italian",
    desc: "Creamy pasta with shrimp, garlic and parmesan",
    image: "Images/photo-1559314809-0d155014e29e.jpeg",
    ingredients: [
      "200g pasta",
      "200g shrimp, peeled",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1/2 cup cream",
      "1/4 cup parmesan cheese",
      "Salt, pepper, parsley",
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Sauté garlic in olive oil, add shrimp and cook 3-4 min.",
      "Add cream and parmesan, stir until sauce thickens.",
      "Mix in pasta, garnish with parsley and serve.",
    ],
    nutrition: [
      { name: "Calories", value: "500 kcal" },
      { name: "Protein", value: "28g" },
      { name: "Carbohydrates", value: "50g" },
      { name: "Fat", value: "20g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "550mg" },
    ],
    tips: [
      "Use al dente pasta for best texture",
      "Do not overcook shrimp",
      "Grate fresh parmesan on top",
      "Serve immediately for creamy sauce",
    ],
  },
  {
    rate: 4.6,
    reviews: 140,
    mealName: "Red Lentil Soup",
    prepTime: "10 min",
    cookTime: "25 min",
    serving: "3 people",
    difficulty: "Easy",
    type: "Egyption",
    desc: "Warm and hearty soup with red lentils and spices",
    image: "Images/photo-1547592166-23ac45744acd.jpeg",
    ingredients: [
      "1 cup red lentils",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 cloves garlic, minced",
      "1 tsp cumin",
      "4 cups vegetable broth",
      "Salt and pepper",
    ],
    instructions: [
      "Sauté onion, carrots, and garlic until soft.",
      "Add lentils, broth, and spices.",
      "Simmer 20-25 min until lentils are tender.",
      "Blend if desired and serve hot.",
    ],
    nutrition: [
      { name: "Calories", value: "280 kcal" },
      { name: "Protein", value: "15g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "5g" },
      { name: "Fiber", value: "12g" },
      { name: "Sodium", value: "600mg" },
    ],
    tips: [
      "Add lemon juice before serving for brightness",
      "Top with fresh parsley",
      "Serve with warm bread",
      "Do not overcook lentils",
    ],
  },
  {
    rate: 4.9,
    reviews: 200,
    mealName: "Classic Lasagna",
    prepTime: "20 min",
    cookTime: "45 min",
    serving: "4 people",
    difficulty: "Medium",
    type: "Italian",
    desc: "Layers of pasta, meat sauce, and cheese baked to perfection",
    image: "Images/photo-1574894709920-11b28e7367e3.jpeg",
    ingredients: [
      "9 lasagna noodles",
      "300g ground beef",
      "2 cups tomato sauce",
      "1 cup ricotta cheese",
      "1 cup mozzarella cheese",
      "1/2 cup parmesan cheese",
      "Salt, pepper, Italian herbs",
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Cook noodles according to package instructions.",
      "Cook beef with tomato sauce, season with herbs.",
      "Layer noodles, beef sauce, ricotta, and mozzarella in a baking dish.",
      "Top with parmesan and bake 35-40 min until golden.",
    ],
    nutrition: [
      { name: "Calories", value: "550 kcal" },
      { name: "Protein", value: "30g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "25g" },
      { name: "Fiber", value: "4g" },
      { name: "Sodium", value: "800mg" },
    ],
    tips: [
      "Let lasagna rest 10 min before serving",
      "Use fresh mozzarella for creaminess",
      "Add spinach for extra nutrition",
      "Cover with foil first to prevent over-browning",
    ],
  },
  {
    rate: 4.7,
    reviews: 120,
    mealName: "Samosa",
    prepTime: "20 min",
    cookTime: "25 min",
    serving: "4 people",
    difficulty: "Medium",
    type: "Snack",
    desc: "Golden fried pastry stuffed with spiced potatoes and peas",
    image: "Images/photo-1601050690597-df0568f70950.jpeg",
    ingredients: [
      "10-12 samosa sheets or spring roll pastry",
      "2 large potatoes, boiled and mashed",
      "1/2 cup green peas",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "1/2 tsp turmeric",
      "Salt, chili powder to taste",
      "Oil for frying",
    ],
    instructions: [
      "Mix mashed potatoes, peas, and spices in a bowl.",
      "Place filling in pastry sheets and fold into triangles.",
      "Seal edges with water or flour paste.",
      "Heat oil in a pan and deep fry samosas until golden brown.",
      "Drain excess oil and serve hot.",
    ],
    nutrition: [
      { name: "Calories", value: "200 kcal per piece" },
      { name: "Protein", value: "4g" },
      { name: "Carbohydrates", value: "25g" },
      { name: "Fat", value: "10g" },
      { name: "Fiber", value: "3g" },
      { name: "Sodium", value: "250mg" },
    ],
    tips: [
      "Do not overfill the pastry to prevent bursting",
      "Seal edges properly before frying",
      "Fry on medium heat for even crispiness",
      "Serve with chutney or ketchup",
    ],
  },
  {
    rate: 4.8,
    reviews: 170,
    mealName: "Mushroom Risotto",
    prepTime: "10 min",
    cookTime: "30 min",
    serving: "2 people",
    difficulty: "Medium",
    type: "Italian",
    desc: "Creamy risotto with mushrooms and parmesan cheese",
    image: "Images/photo-1603133872878-684f208fb84b.jpeg",
    ingredients: [
      "1 cup arborio rice",
      "200g mushrooms, sliced",
      "1/2 onion, chopped",
      "3 cups vegetable broth",
      "1/4 cup parmesan cheese",
    ],
    instructions: [
      "Sauté onion and mushrooms.",
      "Add rice and cook 1 min.",
      "Gradually add broth while stirring.",
      "Stir in parmesan and serve hot.",
    ],
    nutrition: [
      { name: "Calories", value: "400 kcal" },
      { name: "Protein", value: "12g" },
      { name: "Carbohydrates", value: "60g" },
      { name: "Fat", value: "12g" },
      { name: "Fiber", value: "4g" },
      { name: "Sodium", value: "600mg" },
    ],
    tips: [
      "Stir constantly for creamy texture",
      "Use fresh mushrooms for best flavor",
      "Add a splash of white wine for aroma",
      "Serve immediately",
    ],
  },
];

var currentMeal = 0;

var rateEl = document.getElementById("rate");
var reviewsEl = document.getElementById("reviews");
var prepTimeEl = document.getElementById("prepTime");
var cookTimeEl = document.getElementById("cookTime");
var servingEl = document.getElementById("serving");
var mealNameEl = document.getElementById("mealName");
var imgEl = document.getElementById("image");
var descEl = document.getElementById("desc");
var typeEl = document.getElementById("type");
var difficultyEl = document.getElementById("difficulty");
var ingredientsEl = document.getElementById("ingredients");
var instructionsEl = document.getElementById("instructions");
var nutritionEl = document.getElementById("nutrition");
var tipsEl = document.getElementById("tips");
var warningEl = document.getElementById("warning");




function displayMeal() {
  var meal = meals[currentMeal];

  rateEl.innerHTML = meal.rate;
  reviewsEl.innerHTML = `(${meal.reviews} reviews)`;
  prepTimeEl.innerHTML = meal.prepTime;
  cookTimeEl.innerHTML = meal.cookTime;
  servingEl.innerHTML = meal.serving;
  mealNameEl.innerHTML = meal.mealName;
  imgEl.src = meal.image;
  descEl.innerHTML = meal.desc;
  typeEl.innerHTML = meal.type;
  difficultyEl.innerHTML = meal.difficulty;

  displayIngredients(meal);
  displayInstructions(meal);
  displayTips(meal);

  var time = parseInt(meal.prepTime);
  if (time >= 45) {
    warningEl.classList.remove("none");
  } else {
    warningEl.classList.add("none");
  }
}

function displayIngredients(meal) {
  ingredientsEl.innerHTML = "";
  for (var i = 0; i < meal.ingredients.length; i++) {
    ingredientsEl.innerHTML += `
      <div class="d-flex align-items-center gap-3">
        <span class="fw-bolder rounded-circle text-white px-2">${i + 1}</span>
        <p class="mb-0">${meal.ingredients[i]}</p>
      </div>`;
  }
}


function displayInstructions(meal) {
  instructionsEl.innerHTML = "";
  for (var i = 0; i < meal.instructions.length; i++) {
    instructionsEl.innerHTML += `
      <div class="d-flex align-items-center gap-3">
        <span class="fw-bolder fs-4 rounded-4 text-white px-3 py-2">${i + 1}</span>
        <p class="mb-0">${meal.instructions[i]}</p>
      </div>`;
  }
}


function displayTips(meal) {
  tipsEl.innerHTML = "";
  for (var i = 0; i < meal.tips.length; i++) {
    tipsEl.innerHTML += `
      <div class="d-flex align-items-center gap-3">
        <span class="text-white rounded-circle p-1">
          <i class="fa-solid fa-check"></i>
        </span>
        <p class="mb-0">${meal.tips[i]}</p>
      </div>`;
  }
}
function nextMeal() {
  currentMeal++;

  if (currentMeal >= meals.length) {
    currentMeal = 0;
  }

  displayMeal();
}


