import { CommonModule } from "@angular/common";
import { Component, ContentChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorPipe } from "./error/error.pipe";
import { InputDefaultComponent } from "../input/input.directive";

@Component({
    selector: 'app-input-label',
    templateUrl: './form-field.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, ErrorPipe],
    exportAs: 'appInputLabel'
})
export class FormFieldComponent {
    @ContentChild(InputDefaultComponent) input?: InputDefaultComponent;

}