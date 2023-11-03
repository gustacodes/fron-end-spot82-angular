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
  @Input() vagaModal!: Vagas;
  @Input() vagaAtual!: Vagas

  constructor(public modalStatus: SharedService, private formBuilder: FormBuilder, private spotService: SpotService) {}

  ngOnInit(): void {
    
    this.formGroup = this.formBuilder.group({
      
      nome: ['', Validators.required],
      veiculo: ['', Validators.required],
      tipo: ['', Validators.required],
      placa: ['', Validators.required],
      vaga: [4, Validators.required],

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
  }