import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/Client';
import { Spots } from 'src/app/interfaces/Spots';
import { SharedService } from 'src/app/services/shared.service';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
})
export class SpotComponent implements OnInit {
  spots: Spots[] = [];
  clients: Client[] = [];
  available!: 'DISPONIVEL' | 'OCUPADA';
  modalOpen: boolean = false;
  spotBusy: number = 0;
  @Input() spotActual!: Spots;

  constructor(
    private spotService: SpotService,
    public modalStatus: SharedService
  ) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this.spotService.getSpots().subscribe((spot) => {
      this.spots = spot;

      spot.map((c) => {
        if (c.client) {
          this.clients = [...this.clients, c.client];
          this.spotBusy++;
        }
      });
    });
  }
}
