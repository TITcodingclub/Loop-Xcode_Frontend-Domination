export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: string;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  chef: {
    name: string;
    avatar: string;
    verified: boolean;
  };
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh mozzarella, tomatoes, and basil. Simple ingredients that create an extraordinary flavor combination.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&crop=center",
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    reviewCount: 342,
    ingredients: [
      "1 lb pizza dough",
      "1/2 cup pizza sauce",
      "8 oz fresh mozzarella cheese, sliced",
      "2 large tomatoes, sliced",
      "1/4 cup fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 tsp dried oregano"
    ],
    instructions: [
      "Preheat your oven to 475°F (245°C). If using a pizza stone, place it in the oven while preheating.",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Transfer the dough to a pizza pan or parchment paper if using a pizza stone.",
      "Spread the pizza sauce evenly over the dough, leaving a 1-inch border for the crust.",
      "Arrange the mozzarella slices evenly over the sauce.",
      "Add the tomato slices on top of the cheese.",
      "Drizzle with olive oil and season with salt, pepper, and oregano.",
      "Bake for 12-15 minutes until the crust is golden and cheese is bubbly.",
      "Remove from oven and immediately top with fresh basil leaves.",
      "Let cool for 2-3 minutes before slicing and serving."
    ],
    tags: ["Italian", "Vegetarian", "Quick", "Classic"],
    chef: {
      name: "Marco Rossi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "2",
    title: "Korean Bibimbap Bowl",
    description: "A colorful Korean rice bowl topped with seasoned vegetables, meat, and a fried egg. Served with spicy gochujang sauce.",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop&crop=center",
    cookTime: 45,
    servings: 2,
    difficulty: "Hard",
    rating: 4.9,
    reviewCount: 198,
    ingredients: [
      "2 cups cooked white rice",
      "200g beef bulgogi or ground beef",
      "1 cup spinach, blanched",
      "1 cup bean sprouts",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "4 shiitake mushrooms, sliced",
      "2 eggs",
      "3 tbsp gochujang",
      "2 tbsp sesame oil",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "2 cloves garlic, minced",
      "1 tsp sugar",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Cook rice according to package instructions and keep warm.",
      "Marinate beef in soy sauce, sesame oil, and garlic for 15 minutes.",
      "Blanch spinach in boiling water for 30 seconds, then squeeze out excess water.",
      "Season spinach with sesame oil, salt, and garlic.",
      "Sauté each vegetable separately: carrots, zucchini, mushrooms, and bean sprouts.",
      "Season each vegetable with a pinch of salt and sesame oil.",
      "Cook marinated beef in a hot pan until browned and cooked through.",
      "Fry eggs sunny-side up with runny yolks.",
      "Mix gochujang with sesame oil, rice vinegar, and sugar for the sauce.",
      "Arrange rice in bowls, top with vegetables and beef in separate sections.",
      "Place fried egg on top and serve with gochujang sauce on the side.",
      "Mix everything together before eating and sprinkle with sesame seeds."
    ],
    tags: ["Korean", "Healthy", "Colorful", "Spicy"],
    chef: {
      name: "Kim Min-jun",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "3",
    title: "Mediterranean Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection with Mediterranean herbs and served with lemon-herb quinoa and roasted vegetables.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop&crop=center",
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    reviewCount: 156,
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 zucchini, sliced",
      "1 bell pepper, sliced",
      "1 red onion, sliced",
      "1/4 cup olive oil",
      "3 tbsp lemon juice",
      "2 tbsp fresh dill, chopped",
      "2 tbsp fresh parsley, chopped",
      "3 cloves garlic, minced",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Preheat grill to medium-high heat and oil the grates.",
      "Rinse quinoa and cook in vegetable broth according to package directions.",
      "Season salmon fillets with salt, pepper, and oregano.",
      "Brush salmon with olive oil and lemon juice.",
      "Toss vegetables with olive oil, salt, and pepper.",
      "Grill vegetables for 10-12 minutes, turning occasionally.",
      "Grill salmon for 4-5 minutes per side until it flakes easily.",
      "Meanwhile, mix cooked quinoa with herbs, garlic, and lemon juice.",
      "Season quinoa mixture with salt and pepper to taste.",
      "Arrange grilled vegetables and herbed quinoa on plates.",
      "Top with grilled salmon and garnish with fresh herbs.",
      "Serve immediately with lemon wedges."
    ],
    tags: ["Mediterranean", "Healthy", "Grilled", "Seafood"],
    chef: {
      name: "Elena Papadopoulos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "4",
    title: "French Coq au Vin",
    description: "A classic French braised chicken dish cooked in red wine with mushrooms, bacon, and pearl onions. Rich and comforting.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=600&fit=crop&crop=center",
    cookTime: 90,
    servings: 6,
    difficulty: "Hard",
    rating: 4.6,
    reviewCount: 89,
    ingredients: [
      "1 whole chicken (3-4 lbs), cut into pieces",
      "6 strips bacon, chopped",
      "1 bottle red wine (750ml)",
      "2 cups chicken broth",
      "1 lb pearl onions, peeled",
      "8 oz mushrooms, quartered",
      "3 carrots, sliced",
      "4 cloves garlic, minced",
      "2 bay leaves",
      "3 sprigs fresh thyme",
      "2 tbsp tomato paste",
      "2 tbsp flour",
      "2 tbsp butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Preheat oven to 325°F (165°C).",
      "Season chicken pieces generously with salt and pepper.",
      "Cook bacon in a large Dutch oven until crispy, then remove and set aside.",
      "Brown chicken pieces in bacon fat on all sides, then remove.",
      "Sauté onions and mushrooms in the same pot until golden.",
      "Add garlic and cook for another minute.",
      "Stir in tomato paste and flour, cooking for 2 minutes.",
      "Gradually add wine, scraping up any browned bits.",
      "Add chicken broth, bay leaves, and thyme.",
      "Return chicken and bacon to the pot.",
      "Bring to a simmer, then cover and transfer to oven.",
      "Braise for 1 hour until chicken is tender.",
      "Remove bay leaves, adjust seasoning, and garnish with parsley."
    ],
    tags: ["French", "Braised", "Wine", "Comfort Food"],
    chef: {
      name: "Pierre Dubois",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "5",
    title: "Thai Green Curry",
    description: "Authentic Thai green curry with fresh herbs, coconut milk, and your choice of protein. Aromatic and flavorful.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop&crop=center",
    cookTime: 35,
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    reviewCount: 234,
    ingredients: [
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "500g chicken thighs, sliced",
      "1 Thai eggplant, cubed",
      "100g green beans, trimmed",
      "2 kaffir lime leaves",
      "1 tbsp fish sauce",
      "1 tbsp palm sugar",
      "Thai basil leaves",
      "1 red chili, sliced",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat half the coconut milk in a wok until it separates.",
      "Add curry paste and fry until fragrant.",
      "Add chicken and cook until sealed.",
      "Pour in remaining coconut milk and bring to a boil.",
      "Add eggplant, green beans, and lime leaves.",
      "Season with fish sauce and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender.",
      "Garnish with Thai basil and chili.",
      "Serve with jasmine rice."
    ],
    tags: ["Thai", "Curry", "Spicy", "Coconut"],
    chef: {
      name: "Siriporn Nakamura",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0e4?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "6",
    title: "Mexican Street Tacos",
    description: "Authentic Mexican street tacos with marinated meat, fresh onions, cilantro, and homemade salsa.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    cookTime: 20,
    servings: 6,
    difficulty: "Easy",
    rating: 4.8,
    reviewCount: 312,
    ingredients: [
      "500g beef or pork, diced",
      "12 corn tortillas",
      "1 white onion, diced",
      "Fresh cilantro",
      "2 limes, cut into wedges",
      "Salsa verde",
      "2 tbsp vegetable oil",
      "1 tsp cumin",
      "1 tsp chili powder",
      "Salt and pepper"
    ],
    instructions: [
      "Season meat with cumin, chili powder, salt, and pepper.",
      "Heat oil in a skillet over high heat.",
      "Cook meat until browned and cooked through.",
      "Warm tortillas on a griddle or in microwave.",
      "Fill tortillas with meat, onions, and cilantro.",
      "Serve with lime wedges and salsa verde.",
      "Enjoy immediately while hot."
    ],
    tags: ["Mexican", "Street Food", "Quick", "Authentic"],
    chef: {
      name: "Carlos Mendoza",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: false
    }
  },
  {
    id: "7",
    title: "Japanese Ramen Bowl",
    description: "Rich and flavorful ramen with homemade broth, tender pork, and fresh toppings.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&crop=center",
    cookTime: 120,
    servings: 4,
    difficulty: "Hard",
    rating: 4.9,
    reviewCount: 156,
    ingredients: [
      "4 portions fresh ramen noodles",
      "1L chicken stock",
      "500g pork belly",
      "4 soft-boiled eggs",
      "2 green onions, sliced",
      "1 sheet nori, cut into strips",
      "2 tbsp miso paste",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "Bamboo shoots"
    ],
    instructions: [
      "Braise pork belly in soy sauce mixture for 2 hours.",
      "Prepare soft-boiled eggs and marinate overnight.",
      "Heat chicken stock and whisk in miso paste.",
      "Cook ramen noodles according to package instructions.",
      "Slice pork belly and eggs in half.",
      "Assemble bowls with noodles, broth, and toppings.",
      "Garnish with green onions and nori.",
      "Serve immediately while hot."
    ],
    tags: ["Japanese", "Ramen", "Food", "Umami"],
    chef: {
      name: "Hiroshi Tanaka",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  },
  {
    id: "8",
    title: "Indian Butter Chicken",
    description: "Creamy and rich butter chicken curry with tender chicken in a tomato-based sauce.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&crop=center",
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    rating: 4.6,
    reviewCount: 289,
    ingredients: [
      "600g chicken thighs, cubed",
      "400ml coconut cream",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 inch ginger, minced",
      "2 tbsp butter",
      "1 tbsp garam masala",
      "1 tsp turmeric",
      "1 tsp paprika",
      "Fresh cilantro",
      "Basmati rice"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 30 minutes.",
      "Cook chicken in a hot pan until browned.",
      "Sauté onion, garlic, and ginger until fragrant.",
      "Add tomatoes and spices, cook until thick.",
      "Stir in coconut cream and butter.",
      "Add chicken back to the sauce.",
      "Simmer for 15 minutes until chicken is cooked.",
      "Garnish with cilantro and serve with rice."
    ],
    tags: ["Indian", "Curry", "Creamy", "Comfort Food"],
    chef: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  }
];