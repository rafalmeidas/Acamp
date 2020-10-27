import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(control: AbstractControl) {
    let senha = control.get('password').value;
    let confirmarSenha = control.get('confirmPassword').value;

    if (senha === confirmarSenha) return null;

    control.get('confirm-password').setErrors({ passwordConfirm: true });
}