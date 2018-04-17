import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../../core/services/photos.service';
import {Observable} from 'rxjs';
import {Photo} from '../../core/model/model';

@Component({
  selector: 'app-page-photos-list',
  templateUrl: './page-photos-list.component.html',
  styleUrls: ['./page-photos-list.component.css']
})
export class PagePhotosListComponent implements OnInit {

  photos$: Observable<Photo[]>;

  constructor(private photos: PhotosService) { }

  ngOnInit() {
    this.photos$ = this.photos.search('Spirit', 'NAVCAM', 100);
  }

}
