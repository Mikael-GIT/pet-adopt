import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  baseUrl = 'http://localhost:8080/adocao';

  constructor(private http: HttpClient) { }

    agendarEntrevista(adoption): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/agendarEntrevista`, adoption);
    }

    aprovarPedido(adoption): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/aprovarSolicitacao`, adoption);
    }
  }
