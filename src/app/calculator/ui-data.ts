import { IngredientType } from "../data/recipe";

export interface UiData {
  flourAmount: number;
  ingredientTypes: UiIngredientType[];
  setFlourAmount: (amount: number) => void;
  totalWeight: number;
}

export interface UiIngredientType {
  name: string;
  value: IngredientType;
  total: number;
  ingredients: UiIngredient[];
  addIngredient: () => void;
}

export interface UiIngredient {
  index: number;
  name: string;
  weight: number;
  percentage: number;
  type: IngredientType;
  setName: (name: string) => void;
  setWeight: (weight: number) => void;
  setPercentage: (percentage: number) => void;
  delete: () => void;
}
