import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = 'http://localhost:8080/categorias';

constructor(private http: HttpClient) { }

  cadastrar(categoria): Observable<any> {
    return this.http.post<any>(this.baseUrl, categoria);
  }

  atualizar(categoria): Observable<any> {
    return this.http.put<any>(this.baseUrl, categoria);
  }
}

