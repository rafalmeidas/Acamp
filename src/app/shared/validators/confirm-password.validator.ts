import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(control: AbstractControl, password: string) {
    // control.value é o valor que foi digítado no campo
    // if (control.value.trim() && (control.value != password)) {
    //     return { passwordConfirm: true }
    // }
    if (control.value != password) {
        return { passwordConfirm: true }
    }
    return null
}