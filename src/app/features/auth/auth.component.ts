import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonDefaultComponent } from "../../directives/defaults/button/button.component";
import { InputDefaultDirective } from "../../directives/defaults/input/input.directive";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ButtonDefaultComponent, InputDefaultDirective],
})
export class AuthComponent {
    form: FormGroup;
    isValid: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.minLength(6)]],
        });
    }

    onFormSubmit() {

    }

    test() {
        console.log("UNFOCUS");
        this.isValid = !this.isValid;
    }
}