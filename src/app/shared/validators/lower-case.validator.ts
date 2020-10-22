import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
    // control.value é o calor que foi digítado no campo
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true }
    }
    return null
}