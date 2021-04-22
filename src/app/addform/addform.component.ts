import {Component, OnInit, Pipe} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Pipe({
  name: "przelicz"
})
export class PrzeliczPipe {
  transform(val: number ,param1: number){
    return val * param1;
  }
}

export class MyValidator {
  static mabycpomiedzy(min: number, max: number ){
    return function(control: FormControl) {
      let ok = false;

      if(control.value.length >= min && control.value.length <=max) ok = true;

      if(!ok){
        return {
          mabyc: 'liczba jest inna niż oczekiwana'
        }
      }else {
        return null;
      }
    }
  }
}

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  forma: FormGroup = new FormGroup({
    imie: new FormControl('', {validators: [Validators.maxLength(10), Validators.required, MyValidator.mabycpomiedzy(1,10)],
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
