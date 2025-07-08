import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FieldsetModule } from "primeng/fieldset";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { UiIngredient } from "../ui-data";
import { ButtonModule } from "primeng/button";
import { InplaceModule } from "primeng/inplace";
import { AutoFocusModule } from "primeng/autofocus";

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
  imports: [
    FormsModule,
    InputTextModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FieldsetModule,
    ButtonModule,
    InplaceModule,
    AutoFocusModule,
  ],
})
export class IngredientComponent {
  ingredient = input.required<UiIngredient>();
}
