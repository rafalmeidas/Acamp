import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [ MainComponent],
    exports: [ MainComponent ],
    imports: [ CommonModule ]
})
export class MainModule {}