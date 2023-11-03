import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vagas } from 'src/app/interfaces/Vagas';
import { SharedService } from 'src/app/services/shared.service';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})

export class ModalRegisterComponent implements OnInit {

  @Input() modalAberto?: boolean;
  formGroup!: FormGroup;
  @Input() vagaAtual!: Vagas

  constructor(public service: SharedService, private formBuilder: FormBuilder, private spotService: SpotService) {}

  ngOnInit(): void {
    
    this.formGroup = this.formBuilder.group({
      
      nome: [this.service.getVagaAtual()!.cliente ? this.service.getVagaAtual()!.cliente.nome : '', Validators.required],
      veiculo: [this.service.getVagaAtual()!.cliente ? this.service.getVagaAtual()!.cliente.veiculo : '', Validators.required],
      tipo: [this.service.getVagaAtual()!.cliente ? this.service.getVagaAtual()!.cliente.tipo : '', Validators.required],
      placa: [this.service.getVagaAtual()!.cliente ? this.service.getVagaAtual()!.cliente.placa : '', Validators.required],
      vaga: [this.service.getVagaAtual()!.id, Validators.required],

    })
  }

  salvar() {

    this.spotService.salvarCliente(this.formGroup.value).subscribe(cliente => {
      alert('Cliente cadastrado!')
    },
    
    error => {
      alert('Falha ao cadastrar cliente' + JSON.stringify(error))
    }

    )

  }

  finalizarPeriodo() {
    this.spotService.finalizar(this.service.getVagaAtual()?.id).subscribe(() => {
      alert('Cliente finalizado')
    },
    
    (error) => {
      alert('Falha ao finalizar' + JSON.stringify(error))
    }
    )
  }

}