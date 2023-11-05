import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Vagas } from 'src/app/interfaces/Vagas';
import { SharedService } from 'src/app/services/shared.service';
import { SpotService } from 'src/app/services/spot.service';
import { Location } from '@angular/common';
import { FormaDePagamento } from 'src/app/interfaces/FormaDePagamento';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {
  @Input() modalAberto?: boolean;
  formGroup!: FormGroup;
  @Input() vagaAtual!: Vagas;

  constructor(
    public service: SharedService,
    private spotService: SpotService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nome: new FormControl(
        this.service.getVagaAtual()!.cliente
          ? this.service.getVagaAtual()!.cliente.nome
          : '',
        [Validators.required]
      ),
      veiculo: new FormControl(
        this.service.getVagaAtual()!.cliente
          ? this.service.getVagaAtual()!.cliente.veiculo
          : '',
        [Validators.required]
      ),
      tipo: new FormControl(
        this.service.getVagaAtual()!.cliente
          ? this.service.getVagaAtual()!.cliente.tipo
          : '',
        [Validators.required]
      ),
      placa: new FormControl(
        this.service.getVagaAtual()!.cliente
          ? this.service.getVagaAtual()!.cliente.placa
          : '',
        [Validators.required]
      ),
      vaga: new FormControl(this.service.getVagaAtual()!.id, [
        Validators.required,
      ]),
      formaDePagamento: new FormControl(
        this.service.getVagaAtual()!.cliente
          ? this.service.getVagaAtual()!.cliente.pagamento
          : ''
      ),
    });
  }

  get nome() {
    return this.formGroup.get('nome')!;
  }

  get veiculo() {
    return this.formGroup.get('veiculo')!;
  }

  get tipo() {
    return this.formGroup.get('tipo')!;
  }

  get placa() {
    return this.formGroup.get('placa')!;
  }

  salvar() {
    if (this.formGroup.invalid) {
      return;
    }

    this.spotService.salvarCliente(this.formGroup.value).subscribe(
      (cliente) => {
        this.router.navigate(['/']);
      },

      (error) => {
        alert('Falha ao cadastrar cliente' + JSON.stringify(error));
      }
    );
  }

  finalizarPeriodo() {
    this.spotService
      .finalizar(
        this.service.getVagaAtual()?.id,
        this.formGroup.get('formaDePagamento')?.value
      )
      .subscribe(
        () => {},

        (error) => {
          alert('Falha ao finalizar' + JSON.stringify(error));
        }
      );
  }
}
