//(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$


import { AbstractControl } from "@angular/forms";

export function passwordEquals(control: AbstractControl) {
    let senha = control.get('password').value;
    let confirmarSenha = control.get('confirmPassword').value;

    if (senha === confirmarSenha) return null;

    control.get('confirm-password').setErrors({ passwordConfirm: true });
}