import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export interface Szczepionka {
  id: number;
  name: string;
  details: SzczepionkaDetails;
}

export interface SzczepionkaDetails {
  price: number;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  public sid: number;

  constructor(private http: HttpClient) {
    this.sid = Math.random();
  }

  load(): Observable<Szczepionka[]> {
    console.log('id service=' + this.sid );

    const httpHeaders = new HttpHeaders();

    httpHeaders.append('Accept','application/json');

    return this.http.get<Szczepionka[]>(environment.endPointUrl, {headers: httpHeaders});
  }
}
