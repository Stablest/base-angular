import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { InputDefaultComponent } from "../../../components/input/input.directive";
import { ValidatorsMessage } from "../../../components/form-field/error/validators-message";
import { FormFieldComponent } from "../../../components/form-field/form-field.component";
import { ButtonDefaultComponent } from "../../../components/button/button.component";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ButtonDefaultComponent, InputDefaultComponent, FormFieldComponent],
})
export class SignInComponent {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            email: ["", [ValidatorsMessage.required, ValidatorsMessage.email]],
            password: ["", [ValidatorsMessage.required, ValidatorsMessage.minLength(8)]],
        });
    }

    onFormSubmit() {

    }
}
