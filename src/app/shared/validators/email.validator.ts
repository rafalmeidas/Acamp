import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl) {
    // Testa email
    if (control.value.trim() && !/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(control.value)) {
        return { emailInvalid: true }
    }
    return null
}

