import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PagePhotosListComponent } from './page-photos-list/page-photos-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [PagePhotosListComponent, PhotoItemComponent]
})
export class PhotosModule { }
