import { Component, input } from "@angular/core";
import { UiIngredientType } from "../ui-data";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { FloatLabelModule } from "primeng/floatlabel";
import { FieldsetModule } from "primeng/fieldset";
import { IngredientComponent } from "../ingredient/ingredient.component";

@Component({
  selector: "app-ingredient-group",
  templateUrl: "./ingredient-group.component.html",
  imports: [
    FormsModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FieldsetModule,
    IngredientComponent,
  ],
})
export class IngredientGroupComponent {
  ingredientType = input.required<UiIngredientType>();
}
