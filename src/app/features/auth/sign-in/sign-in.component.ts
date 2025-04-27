import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonDefaultComponent } from "../../../defaults/button/button.component";
import { InputDefaultDirective } from "../../../defaults/input/input.directive";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ButtonDefaultComponent, InputDefaultDirective],
})
export class SignInComponent {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.minLength(8)]],
        });
    }

    onFormSubmit() {

    }
}