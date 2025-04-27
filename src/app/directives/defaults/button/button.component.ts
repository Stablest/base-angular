import { Input, HostBinding, Component } from "@angular/core";
import { ButtonVariant } from "./interfaces/variant.interface";

@Component({
    selector: "button[app-default]",
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    standalone: true,
})
export class ButtonDefaultComponent {
    @Input() variant: ButtonVariant = 'primary'

    @HostBinding('class') get variantClass() {
        return this.variant;
    }

}
