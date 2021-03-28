import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  // generuje stylowanie globalnie - nie zalecane
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
