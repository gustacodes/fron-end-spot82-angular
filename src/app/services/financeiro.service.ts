import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../interfaces/Payment';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getFinancialDay(): Observable<Payment> {
    return this.http.get<Payment>(`${this.URL}/financeiro/dia`)
  }

  getPaymentMethodDay(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.URL}/estacionamentos/pagamentos`)
  }

}
