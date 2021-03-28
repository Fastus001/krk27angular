import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListaService, Szczepionka} from '../lista.service';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})
export class DetaleComponent implements OnInit, OnDestroy {

  public id: number;
  public szczepionka: Szczepionka;

  constructor(private rout: ActivatedRoute, private lista: ListaService) {
  }

  ngOnInit(): void {
    this.rout.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
      this.lista.load().subscribe((szczepionki) => {
        this.szczepionka = szczepionki.find((sz) => sz.id == this.id);
      });
    });
  }

  ngOnDestroy(): void {
  }

}
