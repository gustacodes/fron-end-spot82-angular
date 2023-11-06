import { Injectable } from '@angular/core';
import { Spots } from '../interfaces/Spots';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  modalOpen: boolean = false;
  spotActual?: Spots

  constructor() { }

  setModal(modalStatus: boolean) {
    this.modalOpen = modalStatus
  }

  getModal() {
    return this.modalOpen;
  }

  setSpotActual(spot: Spots) {
    this.spotActual = spot
  }

  getSpotActual() {
    return this.spotActual
  }

}
