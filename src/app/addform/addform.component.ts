import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  // imie = new FormControl();

  forma: FormGroup = new FormGroup({
    imie: new FormControl('Adam'),
    nazwisko: new FormControl('Nowak'),

    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  public ustaw():void{


  }
}
