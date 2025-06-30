import { IngredientType } from "../data/recipe";

export interface UiData {
  flourAmount: number;
  ingredientTypes: UiIngredientType[];
}

export interface UiIngredientType {
  name: string;
  value: IngredientType;
  total: number;
  ingredients: UiIngredient[];
}

export interface UiIngredient {
  name: string;
  amount: number;
  type: IngredientType;
}
