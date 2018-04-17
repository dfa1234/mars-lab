import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../../core/services/photos.service';
import {Observable} from 'rxjs';
import {Photo} from '../../core/model/model';
import {SearchEvent} from '../photo-search-form/photo-search-form.component';

@Component({
  selector: 'app-page-photos-list',
  templateUrl: './page-photos-list.component.html',
  styleUrls: ['./page-photos-list.component.css']
})
export class PagePhotosListComponent implements OnInit {

  photos$: Observable<Photo[]>;

  constructor(private photos: PhotosService) { }

  ngOnInit() {
  }

  doSearch(event: SearchEvent) {
    this.photos$ = this.photos.search(event.rover, event.camera, event.sol);
  }

}
