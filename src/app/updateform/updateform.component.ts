import {Component, OnInit} from '@angular/core';
import {AddformComponent} from '../addform/addform.component';
import {AbstractControl} from '@angular/forms';
import {Czlowiek} from '../lista.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './../addform/addform.component.html',
  styleUrls: ['./../addform/addform.component.scss']
})
export class UpdateformComponent extends AddformComponent implements OnInit {


  ngOnInit(): void {
    this.tytul = 'Aktualizuj';
    this.listaServis.getCzlowiek(this.params.id).subscribe((czlowiek: Czlowiek)=>{
      this.forma.setValue(czlowiek);
    })
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

    this.listaServis.updateCzlowiek(czlowiek).subscribe(()=>{
      console.log('udało się zakualizować człowieka');
      alert('Udało się zakualizować człowieka');
      this.router.navigate(['/']);
    })
  }

}
