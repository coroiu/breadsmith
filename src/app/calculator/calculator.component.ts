import { Component, computed, inject } from "@angular/core";
import { DataService } from "../data/data.service";
import { IngredientType, IngredientTypes } from "../data/recipe";
import { UiData, UiIngredient } from "./ui-data";
import { CommonModule } from "@angular/common";
import { IngredientGroupComponent } from "./ingredient-group/ingredient-group.component";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { FloatLabelModule } from "primeng/floatlabel";
import { FieldsetModule } from "primeng/fieldset";
import { solve } from "./solver";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FieldsetModule,
    IngredientGroupComponent,
  ],
})
export class CalculatorComponent {
  private dataService = inject(DataService);

  protected data = computed((): UiData => {
    const recipe = this.dataService.getRecipe("default");
    const solvedRecipe = solve(recipe());
    const ingredients = solvedRecipe.ingredients.map((ingredient, index) => ({
      index,
      ingredient,
    }));

    return {
      flourAmount: solvedRecipe.flourAmount,
      ingredientTypes: IngredientTypes.map((type) => {
        const mappedIngredients = ingredients
          .filter(({ ingredient }) => ingredient.type === type)
          .map(
            ({ ingredient, index }) =>
              ({
                index,
                name: ingredient.name,
                weight: ingredient.weight,
                percentage: ingredient.percentage,
                type: ingredient.type,
                setWeight: (weight: number) => {
                  recipe.update((recipe) => {
                    const newRecipe = {
                      ...recipe,
                      ingredients: [...recipe.ingredients],
                    };
                    newRecipe.ingredients[index] = {
                      ...newRecipe.ingredients[index],
                      percentage: (weight / solvedRecipe.flourAmount) * 100,
                    };
                    return newRecipe;
                  });
                },
                setPercentage: (percentage: number) => {
                  recipe.update((recipe) => {
                    const newRecipe = {
                      ...recipe,
                      ingredients: [...recipe.ingredients],
                    };
                    newRecipe.ingredients[index] = {
                      ...newRecipe.ingredients[index],
                      percentage: percentage,
                    };
                    return newRecipe;
                  });
                },
                delete: () => {
                  recipe.update((recipe) => {
                    const newRecipe = {
                      ...recipe,
                      ingredients: [...recipe.ingredients],
                    };
                    newRecipe.ingredients.splice(index, 1);
                    return newRecipe;
                  });
                },
              } satisfies UiIngredient)
          );

        const total = mappedIngredients
          .map((i) => i.weight)
          .reduce((a, b) => a + b, 0);

        return {
          name: type.charAt(0).toUpperCase() + type.slice(1),
          value: type as IngredientType,
          total,
          ingredients: mappedIngredients,
          addIngredient: () => {
            recipe.update((recipe) => {
              const newRecipe = {
                ...recipe,
                ingredients: [...recipe.ingredients],
              };
              newRecipe.ingredients.push({
                name: "New ingredient",
                percentage: 0,
                type,
              });
              return newRecipe;
            });
          },
        };
      }),
    };
  });

  protected ingredientTypes = IngredientTypes;

  protected value = 0;
}
