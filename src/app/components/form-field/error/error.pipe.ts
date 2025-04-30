import { Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import { ErrorMapper } from "./error-mapper";

@Pipe({
    name: "errorMessage",
    standalone: true,
})
export class ErrorPipe implements PipeTransform {
    transform(value?: ValidationErrors | null): string {
        if (!value) {
            return 'Invalid data'
        }
        // @ts-ignore Can't map symbol to index signature
        return value[ErrorMapper.messageSymbol] ?? 'Invalid data'
    }
}