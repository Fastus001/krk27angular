import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  forma: FormGroup = new FormGroup({
    imie: new FormControl('', {validators: [Validators.maxLength(5), Validators.required],
    updateOn: "blur"}),
    nazwisko: new FormControl('Nowak', Validators.maxLength(15)),
    plec: new FormControl(null, {validators: Validators.required, updateOn: "change"}),
    zyczenia: new FormGroup(
      {
        a: new FormControl(true),
        b: new FormControl(false)
      }),

    typ: new FormControl(null, Validators.required),
    komentarze: new FormControl('chciałbym aby...', Validators.maxLength(150))
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  public ustaw():void{


  }
}
