export interface Recipe {
  ingredients: Ingredient[];
  flourAmount: number;
}

export type Ingredient = {
  name: string;
  amount: number;
  type: IngredientType;
};

const IngredientType = {
  Flour: "flour",
  Water: "water",
  Other: "other",
} as const;
export type IngredientType =
  (typeof IngredientType)[keyof typeof IngredientType];

export const IngredientTypes = Object.values(IngredientType);
