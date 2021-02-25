import {AbstractControl } from '@angular/forms';

export function NotAllowOnlyWhiteSpace (control: AbstractControl){
    if(control.value && /^[ \t]+$/.test(control.value)){
        console.log('erro');
        
        return {onlyWhiteSpace: true}
    } else {
        console.log('passou');
        return null;
    }
}