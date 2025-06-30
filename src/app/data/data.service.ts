import { Injectable, signal } from "@angular/core";
import { Recipe } from "./recipe";

const recipe: Recipe = {
  flourAmount: 500,
  ingredients: [
    { name: "White flour", amount: 100, type: "flour" },
    { name: "Water", amount: 300, type: "water" },
    { name: "Salt", amount: 10, type: "other" },
    { name: "Yeast", amount: 5, type: "other" },
    { name: "Sugar", amount: 10, type: "other" },
    { name: "Oil", amount: 20, type: "other" },
    { name: "Milk", amount: 100, type: "other" },
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
