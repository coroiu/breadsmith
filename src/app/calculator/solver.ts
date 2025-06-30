import { IngredientType, Recipe } from "../data/recipe";
import { UiData } from "./ui-data";

export interface SolvedRecipe {
  ingredients: SolvedIngredient[];
  flourAmount: number;
}

export type SolvedIngredient = {
  name: string;
  weight: number;
  percentage: number;
  type: IngredientType;
};

export function solve(data: Recipe): SolvedRecipe {
  const solvedIngredients: SolvedIngredient[] = data.ingredients.map(
    (ingredient) => ({
      name: ingredient.name,
      weight: (ingredient.percentage / 100) * data.flourAmount,
      percentage: ingredient.percentage,
      type: ingredient.type,
    })
  );

  // Implement your solving logic here
  return {
    flourAmount: data.flourAmount,
    ingredients: solvedIngredients,
  };
}
