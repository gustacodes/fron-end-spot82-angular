import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Pagamento } from 'src/app/interfaces/Pagamento';
import { FinanceiroService } from 'src/app/services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent {

  rendimentoDoDia?: Pagamento

  constructor(private financeiroService: FinanceiroService) {}

  ngOnInit(): void {
    this.financeiroService.getFinanceiroDia().subscribe(dia => {
      this.rendimentoDoDia = dia;
    });
  }

}
