import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';
import { Vagas } from 'src/app/interfaces/Vagas';
import { SharedService } from 'src/app/services/shared.service';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
})
export class SpotComponent implements OnInit {
  vagas: Vagas[] = [];
  clientes: Cliente[] = [];
  available!: 'DISPONIVEL' | 'OCUPADA';
  modalAberto: boolean = false;
  vagasOcupadas: number = 0;
  @Input() vagaAtual!: Vagas;

  constructor(
    private spotService: SpotService,
    public modalStatus: SharedService
  ) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this.spotService.getVagas().subscribe((spot) => {
      this.vagas = spot;

      spot.map((c) => {
        if (c.cliente) {
          this.clientes = [...this.clientes, c.cliente];
          this.vagasOcupadas++;
        }
      });
    });
  }
}
