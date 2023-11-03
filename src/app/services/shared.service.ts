import { Injectable } from '@angular/core';
import { Vagas } from '../interfaces/Vagas';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  modalAberto: boolean = false;
  vagaAtual?: Vagas

  constructor() { }

  setModal(modalStatus: boolean) {
    this.modalAberto = modalStatus
  }

  getModal() {
    return this.modalAberto;
  }

  setVagaAtual(vaga: Vagas) {
    this.vagaAtual = vaga
  }

  getVagaAtual() {
    return this.vagaAtual
  }

}
