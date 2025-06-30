import { Component, computed, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { IftaLabelModule } from "primeng/iftalabel";
import { DataService } from "../data/data.service";
import { IngredientType, IngredientTypes } from "../data/recipe";
import { UiData } from "./ui-data";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    IftaLabelModule,
  ],
})
export class CalculatorComponent {
  private dataService = inject(DataService);

  protected data = computed((): UiData => {
    const recipe = this.dataService.getRecipe("default")();

    return {
      ingredientTypes: IngredientTypes.map((type) => ({
        name: type.charAt(0).toUpperCase() + type.slice(1),
        value: type as IngredientType,
        ingredients: recipe.ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => ({
            name: ingredient.name,
            amount: ingredient.amount,
            type: ingredient.type,
          })),
      })),
    };
  });

  protected ingredientTypes = IngredientTypes;

  protected value = 0;
}
