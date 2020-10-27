import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
    // control.value é o calor que foi digítado no campo
    if (control.value.trim() && !/^[a-zA-Z][a-zA-Z0-9-_\.]{0,15}$/.test(control.value)) {
        return { lowerCase: true }
    }
    return null
}