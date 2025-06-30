export interface Recipe {
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: number;
  // unit: string; everything is in grams for now
  type: IngredientType;
}

const IngredientType = {
  Flour: "flour",
  Water: "water",
  Other: "other",
} as const;
export type IngredientType =
  (typeof IngredientType)[keyof typeof IngredientType];

export const IngredientTypes = Object.values(IngredientType);
