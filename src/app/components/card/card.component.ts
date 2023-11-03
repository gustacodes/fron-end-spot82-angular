import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';
import { Vagas } from 'src/app/interfaces/Vagas';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() vagaCard!: Vagas;
  available!: "DISPONIVEL" | "OCUPADA";

  constructor(public modalStatus: SharedService) {}

}
