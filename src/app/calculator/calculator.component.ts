import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { InputNumberModule } from "primeng/inputnumber"

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  imports: [FormsModule, InputNumberModule],
})
export class CalculatorComponent {
  protected value = 0
}
