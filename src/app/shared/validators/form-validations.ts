import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {


    static equalsTo(otherField: string){
        const validator = (formControl: FormControl) => {
            if(otherField == null) {
                throw new Error('É necessário informar um campo.');
            }
            //Checa se já foi carregado os formcontrols na página para não dar erro procurando algo que ainda não existe,
            //Checando até que o formulário esteja pronto na tela
            if(!formControl.root || !(<FormGroup>formControl.root).controls){
                return null;
            }

            // root da acesso a todos os outros formControls do formGroup do formControl enviado,
            // Checa se existe o otherfield nesse FormGroup
            const field = (<FormGroup>formControl.root).get(otherField);

            if(!field){
                throw new Error('É necessário informar um campo válido.');
            }

            if(field.value !== formControl.value){
                return {equalsTo: true }
            }
            return null;
        };
        return validator;
    }
}