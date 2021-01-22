import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageFluidComponent } from './image-fluid/image-fluid.component';
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';

@NgModule({
    declarations: [
        ImageFluidComponent,
        ImageThumbnailComponent
    ],
    exports: [
        ImageFluidComponent,
        ImageThumbnailComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ImageModule { }