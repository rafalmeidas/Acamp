import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputMessageComponent } from './form-message/Input-message.component';
import { LabelRequiredComponent } from './label-required/label-required.component';

@NgModule({
    declarations: [ 
        InputMessageComponent, 
        LabelRequiredComponent 
    ],
    exports: [ 
        InputMessageComponent,
        LabelRequiredComponent
    ],
    imports: [ CommonModule ]
})
export class UtilFormModule {}