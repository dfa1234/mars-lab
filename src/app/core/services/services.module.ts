import {NgModule} from '@angular/core';
import {RoversService} from './rovers.service';
import {PhotosService} from './photos.service';

@NgModule({
  providers: [
    RoversService,
    PhotosService,
  ]
})
export class ServicesModule { }
