import { Component, Input } from '@angular/core';
import { Spots } from 'src/app/interfaces/Spots';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() spotCard!: Spots;
  available!: "DISPONIVEL" | "OCUPADA";

  constructor(public modalStatus: SharedService) {}

}
