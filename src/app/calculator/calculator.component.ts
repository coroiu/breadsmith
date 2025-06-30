import { Component, computed, inject } from "@angular/core";
import { DataService } from "../data/data.service";
import { IngredientType, IngredientTypes } from "../data/recipe";
import { UiData } from "./ui-data";
import { CommonModule } from "@angular/common";
import { IngredientGroupComponent } from "./ingredient-group/ingredient-group.component";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { FloatLabelModule } from "primeng/floatlabel";
import { FieldsetModule } from "primeng/fieldset";

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
    const recipe = this.dataService.getRecipe("default")();

    return {
      flourAmount: recipe.flourAmount,
      ingredientTypes: IngredientTypes.map((type) => {
        const ingredients = recipe.ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => ({
            name: ingredient.name,
            amount: ingredient.amount,
            type: ingredient.type,
          }));

        const total = ingredients
          .map((i) => i.amount)
          .reduce((a, b) => a + b, 0);

        return {
          name: type.charAt(0).toUpperCase() + type.slice(1),
          value: type as IngredientType,
          total,
          ingredients,
        };
      }),
    };
  });

  protected ingredientTypes = IngredientTypes;

  protected value = 0;
}
