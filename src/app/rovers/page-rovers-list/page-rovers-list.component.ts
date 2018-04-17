import { Component, OnInit } from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Observable} from 'rxjs';
import {Rover} from '../../core/model/model';

@Component({
  selector: 'app-page-rovers-list',
  templateUrl: './page-rovers-list.component.html',
  styleUrls: ['./page-rovers-list.component.css']
})
export class PageRoversListComponent implements OnInit {

  rovers$: Observable<Rover[]>;

  constructor(private rovers: RoversService) { }

  ngOnInit() {
    this.rovers$ = this.rovers.list();
  }

}
