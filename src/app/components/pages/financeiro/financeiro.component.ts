import { Component } from '@angular/core';
import { Pagamento } from 'src/app/interfaces/Pagamento';
import { FinanceiroService } from 'src/app/services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss'],
})
export class FinanceiroComponent {
  rendimentoDoDia?: Pagamento;
  tipoPagamentoDia: Pagamento [] = [];
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
    this.financeiroService.getFinanceiroDia().subscribe((pagamentoDia) => {
      this.rendimentoDoDia = pagamentoDia;
    });
  }

  get() {
    this.financeiroService.getFormaDePagamentoDia().subscribe(tipo => {
      this.tipoPagamentoDia = tipo;
      this.tipoPagamentoDia.forEach((item) => {
        item.formaDePagamento == 'DEBITO' ? this.pagamentoDebito += Number(item.pagamento) : null
        item.formaDePagamento == 'PIX' ? this.pagamentoPix += Number(item.pagamento) : null
        item.formaDePagamento == 'CREDITO' ? this.pagamentoCredito += Number(item.pagamento) : null
        item.formaDePagamento == 'DINHEIRO' ? this.pagamentoDinheiro += Number(item.pagamento) : null
        console.log(item);
        
      });
    });
  }
}
