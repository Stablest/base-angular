import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ErrorMapper {
    static readonly messageSymbol: unique symbol = Symbol('message');

    static map(validator: (control: AbstractControl) => ValidationErrors | null, message: string) {
        return (control: AbstractControl) => {
            const result = validator(control);
            return result === null ? null : {
                ...result,
                [ErrorMapper.messageSymbol]: message,
            }
        }
    }

}