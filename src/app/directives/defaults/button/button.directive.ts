import { Input, HostBinding, Directive } from "@angular/core";
import { ButtonVariant } from "./interfaces/variant.interface";

@Directive({
    selector: "button[default]",
    standalone: true,
})
export class ButtonDefaultDirective {
    @Input() variant: ButtonVariant = 'primary'

    private readonly buttonBaseClasses = 'h-fit w-auto whitespace-nowrap px-4 py-1 text-center font-semibold border rounded-[1rem] text-white';
    private readonly variantDictionary: Record<ButtonVariant, string> = {
        primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        secondary: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-500 focus:ring-offset-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800',
        tertiary: 'bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
    };

    @HostBinding('class') get variantClass() {
        return `${this.buttonBaseClasses} ${this.variantDictionary[this.variant]}`;
    }

}
