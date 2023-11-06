import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/Client';
import { Spots } from '../interfaces/Spots';

@Injectable({
  providedIn: 'root'
})

export class SpotService {

  private baseApiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getSpots(): Observable<Spots[]> {
    return this.http.get<Spots[]>(`${this.baseApiUrl}/estacionamentos/vagas`);
  }

  end(id: number | undefined, methodPayment: string | undefined){
    return this.http.delete<Client>(`${this.baseApiUrl}/clientes/recibo/${id}/${methodPayment}`)
  }

  getSpotByid(id: number): Observable<Spots> {
    return this.http.get<Spots>(`${this.baseApiUrl}/estacionamentos/vagas/${id}`);
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseApiUrl}/clientes`, client);
  }

}
