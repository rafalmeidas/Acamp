import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputMessageComponent } from './form-message/Input-message.component';
import { LabelRequiredComponent } from './label-required/label-required.component';
import { TextFormComponent } from './text-form/text-form.component';

@NgModule({
    declarations: [ 
        InputMessageComponent, 
        LabelRequiredComponent, 
        TextFormComponent 
    ],
    exports: [ 
        InputMessageComponent,
        LabelRequiredComponent,
        TextFormComponent
    ],
    imports: [ CommonModule ]
})
export class UtilFormModule {}