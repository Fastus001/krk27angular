import {Component, OnDestroy, OnInit, Pipe} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Czlowiek, ListaService} from '../lista.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

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
export class AddformComponent implements OnInit , OnDestroy{

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
  protected params: Params;

  sub1: Subscription;

  tytul: string = 'Zapisz';

  constructor(protected listaServis: ListaService, private  route: ActivatedRoute, public router: Router) {
    this.sub1 = this.route.params.subscribe((params: Params)=>{
      this.params = params;
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

  public zapisz() {
    let forma: {[p: string]: AbstractControl} = this.forma.controls;
    let czlowiek: Czlowiek = {
      imie: forma.imie.value,
      nazwisko: forma.nazwisko.value,
      plec: forma.plec.value,
      typ: forma.typ.value,
      komentarz: forma.komentarze.value,
      zyczenia: {
        a: forma.zyczenia.value.a,
        b: forma.zyczenia.value.b
      }
    }
  this.listaServis.addCzlowiek(czlowiek).subscribe(()=>{
    console.log('udało się zapisać człowieka');
    alert('Udało się zapisać człowieka');
    this.router.navigate(['/']);
  })

  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }
}
