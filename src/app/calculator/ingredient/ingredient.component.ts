import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FieldsetModule } from "primeng/fieldset";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputNumberModule } from "primeng/inputnumber";
import { UiIngredient } from "../ui-data";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
  imports: [
    FormsModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FieldsetModule,
    ButtonModule,
  ],
})
export class IngredientComponent {
  ingredient = input.required<UiIngredient>();
}
