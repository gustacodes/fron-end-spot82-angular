import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagamento } from '../interfaces/Pagamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getFinanceiroDia(): Observable<Pagamento> {
    return this.http.get<Pagamento>(`${this.URL}/financeiro/dia`)
  }

  getFormaDePagamentoDia(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.URL}/estacionamentos/pagamentos`)
  }

}
