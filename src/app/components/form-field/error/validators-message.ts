import { Validators } from "@angular/forms";
import { ErrorMapper } from "./error-mapper";

export class ValidatorsMessage {
    static required = ErrorMapper.map(Validators.required, 'Required field');
    static email = ErrorMapper.map(Validators.email, 'Invalid email');
    static minLength = (min: number) => ErrorMapper.map(Validators.minLength(min), `Minimum length is ${min}`);
    static maxLength = (max: number) => ErrorMapper.map(Validators.maxLength(max), `Maximum length is ${max}`);
    static pattern = (pattern: string) => ErrorMapper.map(Validators.pattern(pattern), `Invalid pattern ${pattern}`);
    static min = (min: number) => ErrorMapper.map(Validators.min(min), `Minimum value is ${min}`);
    static max = (max: number) => ErrorMapper.map(Validators.max(max), `Maximum value is ${max}`);
    static range = (min: number, max: number) => ErrorMapper.map(Validators.min(min), `Value must be between ${min} and ${max}`);
    static nullValidator = ErrorMapper.map(Validators.nullValidator, 'Invalid value');
}