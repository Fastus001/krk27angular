import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})
export class DetaleComponent implements OnInit, OnDestroy {

  public id: number;

  constructor() {
    console.log('constructor');
    this.id = 5;
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnDestroy(): void {
  }

}
