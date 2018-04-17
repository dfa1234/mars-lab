import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagePhotosListComponent} from './page-photos-list/page-photos-list.component';
import {PageBigPhotoComponent} from './page-big-photo/page-big-photo.component';

const routes: Routes = [
  {path: 'photos', component: PagePhotosListComponent},
  {path: 'photos/:rover/:photoId', component: PageBigPhotoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
