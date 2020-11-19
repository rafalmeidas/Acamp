import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './col/grid-item.component';

@NgModule({
    declarations: [
        GridComponent,
        GridItemComponent
    ],
    exports: [
        GridComponent,
        GridItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GridModule { }