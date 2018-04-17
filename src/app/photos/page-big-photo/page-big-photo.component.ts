import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotosService} from '../../core/services/photos.service';
import {Observable} from 'rxjs';
import {Photo} from '../../core/model/model';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-page-big-photo',
  templateUrl: './page-big-photo.component.html',
  styleUrls: ['./page-big-photo.component.css']
})
export class PageBigPhotoComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
              private photos: PhotosService) { }

  ngOnInit() {
    this.photo$ = this.route.paramMap.pipe(
      switchMap(params => this.photos.get(params.get('rover'), +params.get('photoId')))
    );
  }

}
