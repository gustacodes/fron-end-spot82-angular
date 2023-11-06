import { Component } from '@angular/core';
import { Payment } from 'src/app/interfaces/Payment';
import { FinanceiroService } from 'src/app/services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss'],
})
export class FinanceiroComponent {
  rendimentoDoDia?: Payment;
  tipoPagamentoDia: Payment [] = [];
  pagamentoDebito: number = 0
  pagamentoPix: number = 0
  pagamentoDinheiro: number = 0
  pagamentoCredito: number = 0
  dataAtual = new Date();

  constructor(private financeiroService: FinanceiroService) {}

  ngOnInit(): void {
    this.getFinanceiro();
    this.get();
    
  }

  getFinanceiro() {
    this.financeiroService.getFinancialDay().subscribe((pagamentoDia) => {
      this.rendimentoDoDia = pagamentoDia;
    });
  }

  get() {
    this.financeiroService.getPaymentMethodDay().subscribe(tipo => {
      this.tipoPagamentoDia = tipo;
      this.tipoPagamentoDia.forEach((item) => {
        item.methodPayment == 'DEBITO' ? this.pagamentoDebito += Number(item.payment) : null
        item.methodPayment == 'PIX' ? this.pagamentoPix += Number(item.payment) : null
        item.methodPayment == 'CREDITO' ? this.pagamentoCredito += Number(item.payment) : null
        item.methodPayment == 'DINHEIRO' ? this.pagamentoDinheiro += Number(item.payment) : null
        console.log(item);
        
      });
    });
  }
}
