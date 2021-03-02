import { AbstractControl } from '@angular/forms';

export function NotAllowOnlyWhiteSpace(control: AbstractControl) {
    //Testa se o campo está sendo digítado somente com espaços em branco ou começa com espaço em branco
    if (control.value && (/^[ \t]+$/.test(control.value) || /^ /.test(control.value))) {
        return { onlyWhiteSpace: true }
    } else {
        return null;
    }
}