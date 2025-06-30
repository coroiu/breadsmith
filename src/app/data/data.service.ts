import { Injectable, signal } from "@angular/core";
import { Recipe } from "./recipe";

const recipe: Recipe = {
  flourAmount: 500,
  ingredients: [
    { name: "White flour", percentage: 90, type: "flour" },
    { name: "Fullwheat flour", percentage: 10, type: "flour" },
    { name: "Water", percentage: 75, type: "water" },
    { name: "Salt", percentage: 2.2, type: "other" },
    { name: "Yeast", percentage: 2, type: "other" },
    { name: "Sugar", percentage: 2, type: "other" },
    { name: "Oil", percentage: 8, type: "other" },
  ],
};

@Injectable({
  providedIn: "root",
})
export class DataService {
  private recipe = signal(recipe);

  getRecipe(_id: string) {
    // only support one recipe for now
    return this.recipe;
  }
}
