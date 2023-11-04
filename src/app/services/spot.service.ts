import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vagas } from '../interfaces/Vagas';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})

export class SpotService {

  private baseApiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getVagas(): Observable<Vagas[]> {
    return this.http.get<Vagas[]>(`${this.baseApiUrl}/estacionamentos/vagas`);
  }

  finalizar(id: number | undefined, formaDePagamento: string | undefined){
    return this.http.delete<Cliente>(`${this.baseApiUrl}/clientes/recibo/${id}/${formaDePagamento}`)
  }

  getVagaById(id: number): Observable<Vagas> {
    return this.http.get<Vagas>(`${this.baseApiUrl}/estacionamentos/vagas/${id}`);
  }

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseApiUrl}/clientes`, cliente);
  }

}
