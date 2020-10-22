import { NgModule } from '@angular/core';
import { LabelRequiredDirective } from './label-required.directive';


@NgModule({
    declarations: [ LabelRequiredDirective ],
    exports:[ LabelRequiredDirective ]
})
export class LabelRequiredModule {}