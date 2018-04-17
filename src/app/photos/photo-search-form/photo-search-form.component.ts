import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Observable} from 'rxjs';
import {Camera, Rover} from '../../core/model/model';
import {PhotosService} from '../../core/services/photos.service';

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<SearchEvent>();

  data: {rover?: Rover, camera?: Camera, sol?: number} = {};
  rovers$: Observable<Rover[]>;


  constructor(private rovers: RoversService) { }

  ngOnInit() {
    this.rovers$ = this.rovers.list();
  }

  emitSearch() {
    this.search.emit({
      rover: this.data.rover.name,
      camera: this.data.camera && this.data.camera.name,
      sol: this.data.sol
    });
  }

}

export interface SearchEvent {
  rover: string;
  camera?: string;
  sol?: number;
}
