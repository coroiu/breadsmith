import { IngredientType } from "../data/recipe";

export interface UiData {
  ingredientTypes: UiIngredientType[];
}

export interface UiIngredientType {
  name: string;
  value: IngredientType;
  ingredients: UiIngredient[];
}

export interface UiIngredient {
  name: string;
  amount: number;
  type: IngredientType;
}
