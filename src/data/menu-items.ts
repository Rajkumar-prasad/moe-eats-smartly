
export type NutritionInfo = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  sodium: number;
};

export type MenuItem = {
  id: string;
  name: string;
  category: 'burrito' | 'bowl' | 'taco' | 'quesadilla' | 'nachos' | 'salad' | 'sides' | 'protein' | 'topping' | 'sauce';
  baseNutrition: NutritionInfo;
  isBase?: boolean;
  isProtein?: boolean;
  isTopping?: boolean;
  isSauce?: boolean;
};

// Main items
export const baseItems: MenuItem[] = [
  { 
    id: 'burrito', 
    name: 'Burrito (Flour Tortilla)', 
    category: 'burrito', 
    isBase: true,
    baseNutrition: { calories: 300, protein: 8, fat: 8, carbs: 46, sodium: 670 } 
  },
  { 
    id: 'bowl', 
    name: 'Burrito Bowl', 
    category: 'bowl', 
    isBase: true,
    baseNutrition: { calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0 } 
  },
  { 
    id: 'taco-soft', 
    name: 'Soft Taco (Flour Tortilla)', 
    category: 'taco', 
    isBase: true,
    baseNutrition: { calories: 150, protein: 4, fat: 4, carbs: 23, sodium: 335 } 
  },
  { 
    id: 'taco-crunchy', 
    name: 'Crunchy Taco (Corn Shell)', 
    category: 'taco', 
    isBase: true,
    baseNutrition: { calories: 170, protein: 2, fat: 9, carbs: 19, sodium: 150 } 
  },
  { 
    id: 'quesadilla', 
    name: 'Quesadilla', 
    category: 'quesadilla', 
    isBase: true,
    baseNutrition: { calories: 380, protein: 15, fat: 18, carbs: 35, sodium: 880 } 
  },
  { 
    id: 'nachos', 
    name: 'Nachos', 
    category: 'nachos', 
    isBase: true,
    baseNutrition: { calories: 530, protein: 7, fat: 27, carbs: 64, sodium: 670 } 
  },
  { 
    id: 'salad', 
    name: 'Salad (Romaine Bowl)', 
    category: 'salad', 
    isBase: true,
    baseNutrition: { calories: 25, protein: 2, fat: 0, carbs: 5, sodium: 25 } 
  }
];

// Proteins
export const proteinItems: MenuItem[] = [
  { 
    id: 'chicken', 
    name: 'Seasoned Chicken', 
    category: 'protein', 
    isProtein: true,
    baseNutrition: { calories: 110, protein: 24, fat: 2.5, carbs: 0, sodium: 380 } 
  },
  { 
    id: 'ground-beef', 
    name: 'Seasoned Ground Beef', 
    category: 'protein', 
    isProtein: true,
    baseNutrition: { calories: 170, protein: 17, fat: 11, carbs: 1, sodium: 400 } 
  },
  { 
    id: 'steak', 
    name: 'Steak', 
    category: 'protein', 
    isProtein: true,
    baseNutrition: { calories: 130, protein: 20, fat: 6, carbs: 1, sodium: 340 } 
  },
  { 
    id: 'pork', 
    name: 'Seasoned Pork', 
    category: 'protein', 
    isProtein: true,
    baseNutrition: { calories: 180, protein: 14, fat: 14, carbs: 0, sodium: 430 } 
  },
  { 
    id: 'tofu', 
    name: 'Tofu', 
    category: 'protein', 
    isProtein: true,
    baseNutrition: { calories: 160, protein: 16, fat: 10, carbs: 6, sodium: 310 } 
  }
];

// Toppings
export const toppingItems: MenuItem[] = [
  { 
    id: 'rice', 
    name: 'Seasoned Rice', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 120, protein: 3, fat: 1, carbs: 25, sodium: 410 } 
  },
  { 
    id: 'beans-black', 
    name: 'Black Beans', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 120, protein: 7, fat: 1, carbs: 22, sodium: 380 } 
  },
  { 
    id: 'beans-pinto', 
    name: 'Pinto Beans', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 120, protein: 7, fat: 1, carbs: 22, sodium: 400 } 
  },
  { 
    id: 'cheese', 
    name: 'Shredded Cheese', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 110, protein: 7, fat: 9, carbs: 1, sodium: 180 } 
  },
  { 
    id: 'lettuce', 
    name: 'Shredded Lettuce', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 5, protein: 0, fat: 0, carbs: 1, sodium: 0 } 
  },
  { 
    id: 'pico', 
    name: 'Pico de Gallo', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 10, protein: 0, fat: 0, carbs: 2, sodium: 200 } 
  },
  { 
    id: 'guac', 
    name: 'Guacamole', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 90, protein: 1, fat: 8, carbs: 5, sodium: 180 } 
  },
  { 
    id: 'sour-cream', 
    name: 'Sour Cream', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 60, protein: 1, fat: 5, carbs: 2, sodium: 20 } 
  },
  { 
    id: 'corn', 
    name: 'Corn Pico', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 80, protein: 2, fat: 1, carbs: 17, sodium: 15 } 
  },
  { 
    id: 'peppers', 
    name: 'Grilled Peppers & Onions', 
    category: 'topping', 
    isTopping: true,
    baseNutrition: { calories: 60, protein: 1, fat: 3, carbs: 6, sodium: 210 } 
  }
];

// Sauces
export const sauceItems: MenuItem[] = [
  { 
    id: 'queso', 
    name: 'Queso', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 90, protein: 5, fat: 7, carbs: 2, sodium: 260 } 
  },
  { 
    id: 'salsa-mild', 
    name: 'Mild Salsa', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 10, protein: 0, fat: 0, carbs: 2, sodium: 240 } 
  },
  { 
    id: 'salsa-medium', 
    name: 'Medium Salsa', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 10, protein: 0, fat: 0, carbs: 2, sodium: 230 } 
  },
  { 
    id: 'salsa-hot', 
    name: 'Hot Salsa', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 10, protein: 0, fat: 0, carbs: 2, sodium: 220 } 
  },
  { 
    id: 'southwest', 
    name: 'Southwest Ranch', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 140, protein: 0, fat: 15, carbs: 1, sodium: 240 } 
  },
  { 
    id: 'chipotle', 
    name: 'Chipotle Ranch', 
    category: 'sauce', 
    isSauce: true,
    baseNutrition: { calories: 150, protein: 0, fat: 15, carbs: 2, sodium: 250 } 
  }
];

// Side items
export const sideItems: MenuItem[] = [
  { 
    id: 'chips', 
    name: 'Chips', 
    category: 'sides',
    baseNutrition: { calories: 280, protein: 3, fat: 14, carbs: 36, sodium: 240 } 
  },
  { 
    id: 'queso-side', 
    name: 'Side of Queso', 
    category: 'sides',
    baseNutrition: { calories: 180, protein: 10, fat: 14, carbs: 4, sodium: 520 } 
  },
  { 
    id: 'guac-side', 
    name: 'Side of Guacamole', 
    category: 'sides',
    baseNutrition: { calories: 180, protein: 2, fat: 16, carbs: 10, sodium: 360 } 
  }
];

// Combine all items
export const allMenuItems: MenuItem[] = [
  ...baseItems,
  ...proteinItems,
  ...toppingItems,
  ...sauceItems,
  ...sideItems
];
