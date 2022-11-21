import { Endereco } from './../pet-info/endereco.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class PetInfoService {

  baseUrl = 'http://localhost:8080/animais';

  consultaCepUrl = 'https://brasilapi.com.br/api/cep/v2';

  constructor(private http: HttpClient) { }


  read(id: string): Observable<Animal> {
    console.log(this.http.get<Animal>(`${this.baseUrl}/${id}`));
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }

  cadastrar(animal): Observable<any> {
    return this.http.post<any>(this.baseUrl, animal);
  }

  atualizar(animal): Observable<any> {
    return this.http.put<any>(this.baseUrl, animal);
  }

  findCep(cep: string){
    console.log(cep);
    return this.http.get<Endereco>(`${this.consultaCepUrl}/${cep}`);
  }

}
