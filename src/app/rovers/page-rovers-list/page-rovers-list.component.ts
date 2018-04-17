import { Component, OnInit } from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Observable} from 'rxjs';
import {Rover} from '../../core/model/model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-page-rovers-list',
  templateUrl: './page-rovers-list.component.html',
  styleUrls: ['./page-rovers-list.component.css'],
  animations: [
    trigger('details', [
      state('void',  style({transform: 'scale(0.1)'})),
      transition('void => *', [
        animate(200, style({transform: 'scale(1.2)'})),
      ]),
      transition('* => *', [
        animate(30, style({transform: 'scale(0.3)'})),
        animate(100, style({transform: 'scale(1)'}))
      ]),
    ])
  ]
})
export class PageRoversListComponent implements OnInit {

  rovers$: Observable<Rover[]>;
  selectedRover: Rover;

  constructor(private rovers: RoversService) { }

  ngOnInit() {
    this.rovers$ = this.rovers.list();
  }

}
